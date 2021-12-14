import { Outlet, useSearchParams } from "react-router-dom";
import AddInvoice from "../components/AddInvoice";
import { getInvoices, addInvoice } from "../data";
import { QueryNavLink } from "./customMethods";
import { useState } from "react";

const Invoices = () => {
  let invoicesData = getInvoices();
  const [invoices, setInvoices] = useState(invoicesData);
  const [check, setCheck] = useState({});
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {/* to create a inpute search field to filter results */}
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {
          invoices
            .filter((invoice) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLocaleLowerCase());
            })
            .map((invoice) => (
              <QueryNavLink
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }}
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </QueryNavLink>
            ))
        }
      </nav>
      <Outlet />
      {/* <AddInvoice invoice={addInvoice} dataaaaa={setCheck}/> */}
      {/* <AddInvoice invoice={setInvoices} /> */}
      {/* <AddInvoice setInvoices[...invoices, invoice] /> */}
      {/* setInvoices([...invoices, invoice]); */}
      {/* above are the tries I made to update the invoices array but below is the solution that worked, learned the hard way :) */}
      <AddInvoice invoice={(inv) => setInvoices([...invoices, inv])} />
      {/* {console.log("check", check)} */}
    </div>
  );
};

export default Invoices;

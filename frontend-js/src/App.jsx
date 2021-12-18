import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hey there!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> | {' '}
        <Link to='/showa'>Show A</Link> | {' '}
        <Link to='/showb'>Show B</Link>
      </nav>
      {/* Outlet helps persisting parent route, while swapping children */}
      <Outlet />
    </div>
  );
}

export default App;

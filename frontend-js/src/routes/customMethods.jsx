import { useLocation, NavLink } from 'react-router-dom';

export const QueryNavLink = ({to, ...props}) => {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />
}

// useLocation tells us information about the URL
// example:
// {
//   pathame: "/invoices",
//   search: "?filter=sa",
//   hash: "",
//   state: null,
//   key: "ae4cz2j"
// }

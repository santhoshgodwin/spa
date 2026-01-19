import { Link, NavLink } from "react-router-dom";
 
export default function NavBar() {
  return (
    <nav className="navbar">
      {/* <div className="logo">UHG Insights</div> */}
      <div className="nav-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/api-demo">API Demo</NavLink>
      </div>
    </nav>
  );
}
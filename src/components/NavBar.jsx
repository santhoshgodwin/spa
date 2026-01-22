import { NavLink } from "react-router-dom";
 
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/api-demo">API Demo</NavLink>
        <NavLink to="/memo">Memo</NavLink>
        <NavLink to="/ref">Ref</NavLink>
      </div>
    </nav>
  );
}
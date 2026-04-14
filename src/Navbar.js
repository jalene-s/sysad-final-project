import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>TEAM PORTFOLIO</h1>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
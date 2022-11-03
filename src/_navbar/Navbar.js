import { Link } from "react-router-dom";
const Navbar = () => {
  const home = "/";
  const create = "/create";

  return (
    <nav className="navbar">
      <Link to={home}><h1>Amer's app</h1></Link>
      <div className="links">
        <Link to={home}>Home</Link>
        <Link to={create}>New blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;

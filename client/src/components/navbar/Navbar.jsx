import { FaCartPlus, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar dFlex">
      <div>
        <Link className="link brand" to="/">
          amazona
        </Link>
      </div>
      <div className="search">
        <input
          className="searchInput"
          type="search"
          placeholder="Search Here"
        />
        <button className="searchBtn">
          <FaSearch />
        </button>
      </div>
      <div className="menu">
        <Link className="link cart" to="/cart">
          <FaCartPlus />
          <span className="badge dFlex center">2</span>
        </Link>
        <Link className="link" to="/register">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

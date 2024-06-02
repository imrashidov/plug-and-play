import { Link } from "react-router-dom";
import pagesData from "~/data/PagesData";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import logo from "~/assets/logo.png";
import HeaderMobile from "./HeaderMobile";

const Navbar = () => {
  return (
    <header id="navbar">
      <div className="nav-container">
        <div className="nav-main">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="nav-links">
            {pagesData.map((page) => (
              <li key={page.id}>
                <Link to={page.path}>{page.title}</Link>
              </li>
            ))}
          </ul>
          <div className="nav-tools">
            <div className="nav-search">
              <input type="text" placeholder="What are you looking for ?" />
              <button>
                <FiSearch />
              </button>
            </div>
            <Link to="/">
              <FiShoppingCart />
            </Link>
            <Link className="nav-sign" to="/login">
              Sign in
            </Link>
          </div>
          <HeaderMobile pagesData={pagesData} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

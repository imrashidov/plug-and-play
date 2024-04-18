import { Link } from "react-router-dom";
import PagesData from "../data/PagesData";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="nav-container">
        <div className="nav-main">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul>
            {PagesData.map((page) => (
              <li key={page.id}>
                <Link to={page.path}>{page.title}</Link>
              </li>
            ))}
          </ul>
          <div className="nav-tools">
            <div className="flex relative ">
              <input
                type="text"
                placeholder="What are you looking for ?"
                className="p-3 text-center outline-none bg-transparent border-2 rounded-2xl border-neutral-600 text-neutral-400 text-base placeholder:text-xs placeholder:text-neutral-300 placeholder:text-left focus:placeholder:text-transparent"
              />
              <i className="absolute h-full right-0 p-2 flex items-center  ">
                <FiSearch className="stroke-neutral-600 text-xl" />
              </i>
            </div>
            <Link to="/">
              <FiShoppingCart />
            </Link>
            <Link className="nav-sign" to="/auth">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

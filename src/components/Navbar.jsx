import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
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
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </ul>
          <div className="nav-tools">
            <button href="/">
              <FiSearch />
            </button>
            <Link href="/">
              <FiShoppingCart />
            </Link>
            <Link className="nav-sign">Sign in</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

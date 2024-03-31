import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="nav-container">
        <div className="nav-main">
          <Link to="/">
            <img src={logo} alt="logo" className="h-14" />
          </Link>
          <ul>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Store</Link>
            <Link>Contact</Link>
          </ul>
          <button>
            <p>Login</p>
            <FiLogIn />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

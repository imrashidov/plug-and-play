import { Link } from "react-router-dom";
import PagesData from "../../data/PagesData";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import logo from "../../assets/logo.png";

const HeaderDesktop = () => {
  return (
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
    </div>
  );
};

export default HeaderDesktop;

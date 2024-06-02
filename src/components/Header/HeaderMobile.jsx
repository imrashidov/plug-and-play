import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const HeaderMobile = () => {
  return (
    <div className="nav-mobile-main">
      <Link to="/">
        <FiShoppingCart />
      </Link>
      <Link className="nav-sign" to="/login">
        Sign in
      </Link>
    </div>
  );
};

export default HeaderMobile;

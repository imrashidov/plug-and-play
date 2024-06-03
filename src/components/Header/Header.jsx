import { useState } from "react";
import { Link } from "react-router-dom";
import pagesData from "~/data/PagesData";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import logo from "~/assets/logo.png";
import HeaderMenuButton from "./HeaderMenuButton";
import { motion } from "framer-motion";

const navContainer = {
  open: { height: "50vh" },
  closed: {},
};
const navLinks = {
  open: { opacity: 1, display: "block" },
  closed: { opacity: 0, display: "none" },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <header>
      <motion.div
        className="nav-container"
        animate={isOpen ? navContainer.open : navContainer.closed}
        transition={{
          ease: "linear",
          duration: 0.1,
        }}
      >
        <div className="nav-main">
          <div className="nav-dropdown-container">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            {/* Mobile Menu Button */}
            <motion.button
              className="nav-mobile-menu-button"
              onClick={toggleOpen}
            >
              <HeaderMenuButton isOpen={isOpen} />
            </motion.button>
          </div>
          <motion.div
            className="nav-dropdown-menu"
            transition={{
              ease: "linear",
              duration: isOpen ? 1 : 0,
            }}
            animate={isOpen ? navLinks.open : navLinks.closed}
          >
            <motion.ul>
              {pagesData.map((page) => (
                <li key={page.id}>
                  <Link to={page.path}>{page.title}</Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
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
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;

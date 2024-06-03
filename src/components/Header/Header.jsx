import { useState } from "react";
import { Link } from "react-router-dom";
import pagesData from "~/data/PagesData";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import logo from "~/assets/logo.png";
import HeaderMenuButton from "./HeaderMenuButton";
import { motion } from "framer-motion";

const dropdownMenu = {
  open: { height: "50vh" },
  closed: {},
};
const dropdownContent = {
  open: { opacity: 1, display: "block" },
  closed: { opacity: 0, display: "none" },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <motion.div
        className="nav-container"
        animate={isOpen ? dropdownMenu.open : dropdownMenu.closed}
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
            animate={isOpen ? dropdownContent.open : dropdownContent.closed}
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
            {/* Dark Mode Switch Start */}
            <div
              className="nav-switch"
              data-darkMode={darkMode}
              onClick={toggleDarkMode}
            >
              <motion.div
                className="darkHandle"
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
              >
                {darkMode ? <MdDarkMode /> : <MdLightMode />}
              </motion.div>
              {/* Dark Mode Switch End */}
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;

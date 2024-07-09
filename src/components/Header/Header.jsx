import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import pagesData from "~/data/PagesData";
import logo from "~/assets/logo.png";
import HeaderMenuButton from "./HeaderMenuButton";
import HeaderMenu from "./HeaderMenu";

const dropdownMenu = {
  open: { height: "50vh" },
  closed: {},
};
const searchButton = {
  open: {
    translateX: "10px",
    rotate: "360deg",
    scale: 0.7,
    display: "block",
    color: "#525252",
    zIndex: 100,
  },
  closed: {},
};
const searchInput = {
  open: {
    width: "100%",
    opacity: 1,
    translateX: "0px",
    display: "block",
    paddingLeft: "10px",
  },
  closed: { display: "none", opacity: 0, width: "0px", scale: 0 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [searchModal, setSearchModal] = useState(false);
  const location = useLocation();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSearchModal = () => {
    setSearchModal(!searchModal);
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
              <img src={logo} alt="logo" className="nav-logo" />
            </Link>
            {/* Search Input Start */}
            <motion.div
              className="nav-dropdown-search"
              animate={searchModal ? searchInput.open : searchInput.closed}
              transition={{
                ease: "linear",
                duration: 0.1,
              }}
            >
              <motion.input
                type="text"
                placeholder="Search..."
                animate={searchModal ? searchInput.open : searchInput.closed}
                transition={{
                  ease: "linear",
                  duration: 0.1,
                }}
              />
            </motion.div>
            {/* Search Input End */}
            <div className="nav-dropdown-container-buttons">
              {/* Search Button Start */}
              <motion.button
                className="nav-dropdown-search"
                onClick={toggleSearchModal}
                animate={searchModal ? searchButton.open : searchButton.closed}
                transition={{
                  ease: "linear",
                  duration: 0.1,
                }}
              >
                <FiSearch />
              </motion.button>
              {/* Search Button End */}
              {/* Mobile Menu Button Start */}
              <HeaderMenuButton isOpen={isOpen} toggleOpen={toggleOpen} />
              {/* Mobile Menu Button End */}
            </div>
          </div>
          <HeaderMenu
            isOpen={isOpen}
            pagesData={pagesData}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            searchModal={searchModal}
          />
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
              data-dark={darkMode}
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

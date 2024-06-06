import propTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HiLogout } from "react-icons/hi";
import { FaUser, FaShoppingBasket } from "react-icons/fa";
import SearchModal from "~/components/Modals/SearchModal";
import profilePicture from "~/assets/profile-picture.jpg";

const dropdownContent = {
  open: { opacity: 1, display: "block" },
  closed: { opacity: 0, display: "none" },
};

const HeaderMenu = ({
  isOpen,
  pagesData,
  darkMode,
  toggleDarkMode,
  searchModal,
}) => {
  return (
    <>
      {searchModal && <SearchModal />}
      <motion.div
        className="nav-dropdown-menu "
        transition={{
          ease: "linear",
          duration: isOpen ? 1 : 0,
        }}
        animate={isOpen ? dropdownContent.open : dropdownContent.closed}
      >
        <div className="nav-dropdown-main ">
          <div className="nav-dropdown-content">
            <motion.ul>
              {pagesData.map((page) => (
                <li key={page.id}>
                  <Link to={page.path}>{page.title}</Link>
                </li>
              ))}
            </motion.ul>
            <div className="nav-dropdown-account ">
              <div className="nav-account">
                <div className="nav-account-details">
                  <img src={profilePicture} alt="user" />
                  <div className="nav-account-info">
                    <p>
                      ID <br /> <span>4810587</span>
                    </p>
                    <p>
                      Username <br /> <span>imrashidov</span>
                    </p>
                  </div>
                </div>
                <div className="nav-account-settings">
                  <Link>
                    <span>
                      <FaUser />
                    </span>
                    {""}
                    Profile
                  </Link>
                  <Link>
                    <span>
                      <FaShoppingBasket />
                    </span>{" "}
                    Cart
                  </Link>
                  <Link className="logout">
                    <span>
                      <HiLogout />
                    </span>
                    {""}
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="nav-dropdown-switch nav-switch"
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
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HeaderMenu;

HeaderMenu.propTypes = {
  isOpen: propTypes.bool,
  darkMode: propTypes.bool,
  toggleDarkMode: propTypes.bool,
  searchModal: propTypes.bool,
  pagesData: propTypes.array,
};

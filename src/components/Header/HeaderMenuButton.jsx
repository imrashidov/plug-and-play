import propTypes from "prop-types";
import { motion } from "framer-motion";

const HeaderMenuButton = ({ isOpen, toggleOpen }) => {
  return (
    <motion.button onClick={toggleOpen} className="nav-dropdown-button">
      <motion.svg width="30" height="30" viewBox="0 0 23 23">
        <motion.line
          x1="0"
          y1="1"
          x2="23"
          y2="1"
          stroke="white"
          strokeWidth="1.5"
          animate={isOpen ? "open" : "closed"}
          transition={{ ease: "easeOut", duration: 0.2 }}
          variants={{
            open: {
              rotate: "45deg",
              translateY: "10px",
            },
            closed: {
              rotate: "0deg",
              translateY: "0px",
            },
          }}
        />
        <motion.line
          x1="0"
          y1="11"
          x2="23"
          y2="11"
          stroke="white"
          strokeWidth="1.5"
          animate={isOpen ? "open" : "closed"}
          transition={{ ease: "easeOut", duration: 0.2 }}
          variants={{
            open: {
              scale: 0,
            },
            closed: {
              scale: 1,
            },
          }}
        />
        <motion.line
          x1="0"
          y1="21"
          x2="23"
          y2="21"
          stroke="white"
          strokeWidth="1.5"
          animate={isOpen ? "open" : "closed"}
          transition={{ ease: "easeOut", duration: 0.2 }}
          variants={{
            open: {
              rotate: "-45deg",
              translateY: "-10px",
            },
            closed: {
              rotate: "0deg",
              translateY: "0px",
            },
          }}
        />
      </motion.svg>
    </motion.button>
  );
};

export default HeaderMenuButton;

HeaderMenuButton.propTypes = {
  toggleOpen: propTypes.func,
  isOpen: propTypes.bool,
  pagesData: propTypes.array,
};

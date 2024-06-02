import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoLogInSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="nav-mobile-menu">
      {/* Animated Menu Button */}
      <motion.button onClick={toggleOpen}>
        <motion.svg width="30" height="30" viewBox="0 0 23 23">
          <motion.line
            x1="0"
            y1="1"
            x2="23"
            y2="1"
            stroke="white"
            strokeWidth="1.5"
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: {
                rotate: "45deg",
                translateY: "10px",
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
            variants={{
              open: {
                scale: 0,
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
            variants={{
              open: {
                rotate: "-45deg",
                translateY: "-10px",
              },
            }}
          />
        </motion.svg>
      </motion.button>
    </div>
  );
};

export default HeaderMobile;

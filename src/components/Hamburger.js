import React from "react";
import { motion } from "framer-motion";

const lineOneVariants = {
  initial: { rotate: "0deg" },
  animate: { y: ".35rem", rotate: "45deg", transformOrigin: "center center" },
};
const lineThreeVariants = {
  initial: { rotate: "0deg" },
  animate: { y: "-.35rem", rotate: "-45deg", transformOrigin: "center center" },
};

const Hamburger = ({ onMenuClick, menuOpen }) => {
  return (
    <div className="hamburger_menu">
      <div className="hamburger_menu-line-container" onClick={onMenuClick}>
        <motion.div
          variants={lineOneVariants}
          initial="initial"
          animate={menuOpen ? "animate" : "initial"}
          className="hamburger_menu-line-1"
        ></motion.div>
        <motion.div
          variants={lineThreeVariants}
          initial="initial"
          animate={menuOpen ? "animate" : "initial"}
          className="hamburger_menu-line-3"
        ></motion.div>
      </div>
    </div>
  );
};

export default Hamburger;

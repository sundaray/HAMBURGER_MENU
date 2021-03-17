import React from "react";
import { motion } from "framer-motion";

const overlayVariants = {
  initial: { opacity: 0, y: "-100vh" },
  animate: {
    opacity: 1,
    y: "0vh",
    transition: {
      type: "linear",
      ease: "easeInOut",
    },
  },
};

const Overlay = ({ menuOpen, onOverlayClick }) => {
  return (
    <motion.div
      variants={overlayVariants}
      initial="initial"
      animate={menuOpen ? "animate" : "initial"}
      className="overlay"
      onClick={onOverlayClick}
    ></motion.div>
  );
};

export default Overlay;

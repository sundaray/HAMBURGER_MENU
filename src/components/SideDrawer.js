import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const drawerVariants = {
  initial: {
    // y: "-100vh",
    height: 0,
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  animate: {
    height: "30rem",
    // y: "0vh",
    opacity: 1,
    transition: {
      type: "linear",
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

const linkVariants = {
  initial: {
    color: "white",
    x: "-2rem",
    opacity: 0,
  },
  animate: {
    x: "0rem",
    opacity: 1,
    transition: {
      type: "linear",
      ease: "easeInOut",
    },
  },
};

const SideDrawer = ({ menuOpen, onSidedrawerNavbarLinkClick }) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          variants={drawerVariants}
          initial="initial"
          animate="animate"
          exit="initial"
          className="sideDrawer"
        >
          <nav className="sideDrawer-navbar">
            <ul className="sideDrawer-navbar-list">
              <motion.li
                variants={linkVariants}
                onClick={onSidedrawerNavbarLinkClick}
              >
                <Link to="/about" className="sideDrawer-navbar-link">
                  About
                </Link>
              </motion.li>
              <li className="sidedrawer-navbar-link-divider"></li>
              <motion.li
                variants={linkVariants}
                onClick={onSidedrawerNavbarLinkClick}
              >
                <Link to="/projects" className="sideDrawer-navbar-link">
                  Projects
                </Link>
              </motion.li>
              <li className="sidedrawer-navbar-link-divider"></li>
              <motion.li
                variants={linkVariants}
                onClick={onSidedrawerNavbarLinkClick}
              >
                <Link to="/cv" className="sideDrawer-navbar-link">
                  CV
                </Link>
              </motion.li>
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideDrawer;

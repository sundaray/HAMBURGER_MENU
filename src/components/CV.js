import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  initial: { y: ".5rem", opacity: 0 },
  animate: {
    y: "0rem",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const CV = () => {
  const { user } = useSelector((state) => state.login);

  const handleClick = async () => {
    const { data } = await axios.get("/api/download");
    window.open(data, "_blank");
  };

  return (
    <>
      {user ? (
        <div className="btn-container">
          <button
            onClick={handleClick}
            className="btn btn-primary btn-lg download-cv-button"
          >
            Download CV
          </button>
        </div>
      ) : (
        <div className="download-cv-default">
          <p className="download-cv-paragraph text-center font-weight-bold">
            You must be registered to download CV.{" "}
          </p>
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            className="btn btn-primary btn-lg download-cv-register-button"
          >
            <Link
              to="/register"
              style={{ color: "white", textDecoration: "none" }}
            >
              Register
            </Link>
          </motion.button>
        </div>
      )}
    </>
  );
};

export default CV;

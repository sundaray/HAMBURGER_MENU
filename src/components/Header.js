import React from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Hamburger />
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <NavLink
              to="/"
              exact
              className="navbar-link"
              activeStyle={{ color: "#F2F2F2" }}
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink
              to="/about"
              className="navbar-link"
              activeStyle={{ color: "#F2F2F2" }}
            >
              About
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink
              to="/projects"
              className="navbar-link"
              activeStyle={{ color: "#F2F2F2" }}
            >
              Projects
            </NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink
              to="/cv"
              className="navbar-link"
              activeStyle={{ color: "#F2F2F2" }}
            >
              CV
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

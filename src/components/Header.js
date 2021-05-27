import React from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
import SideDrawer from "./SideDrawer";
import Overlay from "./Overlay";

const Header = ({
  menuOpen,
  onMenuClick,
  onOverlayClick,
  onSidedrawerNavbarLinkClick,
}) => {
  return (
    <header>
      <Hamburger menuOpen={menuOpen} onMenuClick={onMenuClick} />
      <SideDrawer
        menuOpen={menuOpen}
        onSidedrawerNavbarLinkClick={onSidedrawerNavbarLinkClick}
      />
      <Overlay menuOpen={menuOpen} onOverlayClick={onOverlayClick} />

      <nav className="navbar">
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

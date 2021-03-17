import React, { useState } from "react";
import Header from "./components/Header";
import SideDrawer from "./components/SideDrawer";
import Overlay from "./components/Overlay";
import Hamburger from "./components/Hamburger";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  const handleOverlayClick = () => {
    setMenuOpen(!menuOpen);
  };
  const handleSidedrawerNavbarLinkClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Route render={(props) => <Header {...props} />} />
      <Hamburger menuOpen={menuOpen} onMenuClick={handleHamburgerMenuClick} />
      <SideDrawer
        menuOpen={menuOpen}
        onSidedrawerNavbarLinkClick={handleSidedrawerNavbarLinkClick}
      />
      <Overlay menuOpen={menuOpen} onOverlayClick={handleOverlayClick} />
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useCycle } from "framer-motion";

const App = () => {
  const [menuOpen, cycleMenuOpen] = useCycle(false, true);

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onMenuClick={cycleMenuOpen}
        onSidedrawerNavbarLinkClick={cycleMenuOpen}
        onOverlayClick={cycleMenuOpen}
      />
    </>
  );
};

export default App;

import React, { useRef } from "react";
import NavbarTop from "./components/NavbarTop";
import NavbarMain from "./components/NavbarMain";
import MobileNavbar from "./components/Mobile/Mobile"; // Yangi mobil komponent
import { NavbarWrapper } from "./Navbar.styled";

function Navbar() {
  const mobNavRef = useRef(null);

  const handleOpen = () => {
    console.log("Mobile menu toggled");
  };

  return (
    <NavbarWrapper>
      <div className="desktop-content">
        <div className="container">
          <NavbarTop />
          <NavbarMain />
        </div>
      </div>

      <MobileNavbar handleOpen={handleOpen} />
    </NavbarWrapper>
  );
}

export default Navbar;

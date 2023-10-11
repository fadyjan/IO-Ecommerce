import React, { useLayoutEffect, useState } from "react";
import "./NavBar.css";
import CompanyLogo from "../../assets/images/CompanyLogo.png";
import NavBarSelections from "../NavBarSelections/NavBarSelections";
import NavBarCart from "../NavBarCart/NavBarCart";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const NavBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    // Function to update the isSmallScreen state based on screen width
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 650); // You can adjust the threshold as needed
    };

    // Initial call to set the initial state
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav id="NavBarWrapper">
      <div id="LogoWithSelctionsWrapper">
        <img id="CompanyLogo" src={CompanyLogo}></img>
        {isSmallScreen ? <BurgerMenu /> : <NavBarSelections />}
      </div>
      <NavBarCart />
    </nav>
  );
};

export default NavBar;

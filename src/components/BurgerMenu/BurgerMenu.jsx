import React, { useState } from "react";
import "./BurgerMenu.css";
import BurgerIcon from "../../assets/images/icon-menu.svg";
import NavBarSelections from "../NavBarSelections/NavBarSelections";
import CloseIcon from "../../assets/images/icon-close.svg";
const BurgerMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const HandleOpeningMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };

  const HandleCLosingMenu = () => {
    setIsMenuOpened(false);
  };

  return (
    <>
      <img src={BurgerIcon} onClick={HandleOpeningMenu}></img>
      {isMenuOpened ? (
        <>
          <div id="SideBarMenu">
            <img
              id="CloseBtn"
              src={CloseIcon}
              onClick={HandleCLosingMenu}
            ></img>
            <NavBarSelections HandleCLosingMenu={HandleCLosingMenu}></NavBarSelections>
          </div>
          <div id="OverLay"></div>
        </>
      ) : null}
    </>
  );
};

export default BurgerMenu;

import React, { useState } from "react";
import "./BurgerMenu.css";
import BurgerIcon from "../../assets/images/icon-menu.svg";
import NavBarSelections from "../NavBarSelections/NavBarSelections";
import CloseIcon from "../../assets/images/icon-close.svg";
import useOnclickOutside from "react-cool-onclickoutside";

const BurgerMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const HandleOpeningMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };

  const HandleCLosingMenu = () => {
    setIsMenuOpened(false);
  };

  const ref = useOnclickOutside(() => {
    setIsMenuOpened(false);
  });
  return (
    <>
      <img src={BurgerIcon} onClick={HandleOpeningMenu}></img>
      <div
        id="SideBarMenu"
        className={isMenuOpened ? "showMenu" : "closeMenu"}
        ref={ref}
      >
        <img id="CloseBtn" src={CloseIcon} onClick={HandleCLosingMenu}></img>
        <NavBarSelections
          HandleCLosingMenu={HandleCLosingMenu}
        ></NavBarSelections>
      </div>
      {isMenuOpened ? <div id="OverLay"></div> : null}
    </>
  );
};

export default BurgerMenu;

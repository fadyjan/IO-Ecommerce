import React, { useState } from "react";
import "./NavBarCart.css";
import IconCart from "../../assets/images/icon-cart.svg";
import NavBarAvatar from "../NavBarAvatar/NavBarAvatar";
import CartMenu from "../CartMenu/CartMenu";
import { useSelector } from "react-redux";
import useOnclickOutside from "react-cool-onclickoutside";

const NavBarCart = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Count = useSelector((state) => state.cart.cartProducts.length);
  const handleShowingCart = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const ref = useOnclickOutside(() => {
    setIsMenuOpen(false);
  });

  return (
    <div id="CartWithAvatarWrapper">
      <img id="CartIcon" src={IconCart} onClick={handleShowingCart}></img>
      {Count > 0 && <div id="CartCount">{Count}</div>}
      {isMenuOpen ? <CartMenu CartMenuRef={ref}></CartMenu> : null}
      <NavBarAvatar></NavBarAvatar>
    </div>
  );
};

export default NavBarCart;

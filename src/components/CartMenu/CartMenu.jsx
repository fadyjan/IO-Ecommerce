import React from "react";
import { useSelector } from "react-redux";
import "./CartMenu.css";
import EmptyCart from "../EmptyCart/EmptyCart";
import CartItem from "../CartItem/CartItem";

const CartMenu = ({CartMenuRef}) => {
  const CartProducts = useSelector((state) => state.cart.cartProducts);
  return (
    <div id="CartMenuWrapper" ref={CartMenuRef}>
      <div id="CartLabelDiv">
        <label id="CartLabel">Cart</label>
      </div>
      <div className="CartMenuItems">
        {CartProducts.length > 0 ? (
          CartProducts.map((productItem) => {
            return <CartItem key={'CartItem'+productItem.id} productItem={productItem} />;
          })
        ) : (
          <EmptyCart />
        )}
      </div>
      <div className="ResizeHandle"></div>
    </div>
  );
};

export default CartMenu;

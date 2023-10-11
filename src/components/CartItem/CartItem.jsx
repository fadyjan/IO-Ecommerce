import React from "react";
import "./CartItem.css";
import RemoveFromCart from "../RemoveFromCart/RemoveFromCart";
const CartItem = ({ productItem }) => {
    const ProductPrice =(Number(productItem.price) * Number(productItem.amount)).toFixed(2)


  return (
    <div className="CartItemWrapper">
      <div className="CartItemImageWrapper">
        <img src={productItem.image}></img>
      </div>
      <div className="CartItemInfoWrapper">
        <label className="CartItemTitle">{productItem.title}</label>
        <div className="CartItemPriceInfo">
          <label className="CartItemPrice">
            {productItem.price} X {productItem.amount}
          </label>
          <label className="CartItemTotalPrice">
            ${ProductPrice}
          </label>
        </div>
      </div>
      <RemoveFromCart ProductId={productItem.id} />
    </div>
  );
};

export default CartItem;

import React from "react";
import deleteIcon from "../../assets/images/icon-delete.svg";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/ReduxSlices/CartSlice";
import "./RemoveFromCart.css";
const RemoveFromCart = ({ ProductId }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (e) => {
    const ProductID = e.target.id;
    dispatch(removeProduct(ProductID));
  };
  return (
    <img
      className="RemoveItem"
      id={ProductId}
      src={deleteIcon}
      onClick={handleRemoveFromCart}
    ></img>
  );
};

export default RemoveFromCart;

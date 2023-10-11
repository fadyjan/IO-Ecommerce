import React, { useState, useEffect } from "react"; // Add useState import
import "./ProductProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/ReduxSlices/SingleProductSlice";
import AddToCart from "../AddToCart/AddToCart";

const ProductProfile = ({ ProductID }) => {
  const [count, setCount] = useState(0); 

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const Product = useSelector((state) => state.singleProduct);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(ProductID));
  }, []);

  return (
    <div id="ProductProfileWrapper">
      <div id="ProductProfileIamge">
        <img src={Product.product.image}></img>
      </div>
      <div id="ProductProfileInfo">
        <label id="ProductProfileTitle">{Product.product.title}</label>
        <p id="ProductProfileDescription">{Product.product.description}</p>
        <label id="ProductPrice">${Product.product.price}</label>
        <div id="AddToCartSection">
          <div id="ProductCounterWrapper">
            <button onClick={handleDecrement}>-</button>
            <label>{count}</label>
            <button onClick={handleIncrement}>+</button>
          </div>
          <AddToCart amount={count} product = {Product.product}></AddToCart>

        </div>
      </div>
    </div>
  );
};

export default ProductProfile;

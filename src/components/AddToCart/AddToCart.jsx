import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/ReduxSlices/CartSlice";
import { useNavigate  } from "react-router-dom";
const AddToCart = ({ amount, product }) => {
  const navigate  = useNavigate ();
  const dispatch = useDispatch();
  const isUserLogedIn = useSelector((state) => state.auth.userToken);

  const handleAddingProdcutToCart = () => {
    dispatch(addProduct({ ...product, amount }));
  };
  const redirectToLoginPage = () => {
    navigate('/login');
  };
  return (
    <button
      id="AddToCartButton"
      onClick={
        isUserLogedIn != "" ? handleAddingProdcutToCart : redirectToLoginPage
      }
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;

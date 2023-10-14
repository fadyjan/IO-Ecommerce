import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/ReduxSlices/CartSlice";
import { useNavigate } from "react-router-dom";
import ModalPopUp from "../ModalPopUp/ModalPopUp";
const AddToCart = ({ amount, product }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUserLogedIn = useSelector((state) => state.auth.userToken);

  //
  const handleAddingProdcutToCart = () => {
    setShowModal(true);
    dispatch(addProduct({ ...product, amount }));
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  const redirectToLoginPage = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate("/login");
    }, 2500);
  };

  return (
    <>
      {showModal && (
        <ModalPopUp
          onClose={() => setShowModal(false)}
          contentMessage={
            isUserLogedIn
              ? "Item has been added to the cart"
              : "You have to log in first, redirect to login page"
          }
        />
      )}
      <button
        id="AddToCartButton"
        onClick={
          isUserLogedIn != "" ? handleAddingProdcutToCart : redirectToLoginPage
        }
      >
        Add To Cart
      </button>
    </>
  );
};

export default AddToCart;

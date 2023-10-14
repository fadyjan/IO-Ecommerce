// AddToCart component
import React from "react";
import ModalPopUp from "../ModalPopUp/ModalPopUp";
import useCartActions from "../../hooks/useCartActions"; // path might vary

const AddToCart = ({ amount, product }) => {
  const { handleButtonClick, showModal, modalMessage, onCloseModal } =
    useCartActions(amount, product);

  return (
    <>
      {showModal && (
        <ModalPopUp onClose={onCloseModal} contentMessage={modalMessage} />
      )}
      <button id="AddToCartButton" onClick={handleButtonClick}>
        Add To Cart
      </button>
    </>
  );
};

export default AddToCart;

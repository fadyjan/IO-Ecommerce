// hooks/useCartActions.js
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/ReduxSlices/CartSlice";
import { useNavigate } from "react-router-dom";

const useCartActions = (amount, product) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); 

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isUserLogedIn = useSelector((state) => state.auth.userToken);

  const handleAddingProdcutToCart = () => {
    if (amount === 0) {
      setModalMessage("You need to add amount");
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
      return;
    }
    setModalMessage('Item has been added successfully to your cart');
    setShowModal(true);
    dispatch(addProduct({ ...product, amount }));
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  const redirectToLoginPage = () => {
    setModalMessage("You have to login first, redirect to log in page ..")
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate("/login");
    }, 2500);
  };

  const handleButtonClick = () => {
    if (isUserLogedIn !='') {
      handleAddingProdcutToCart();
    } else {
      redirectToLoginPage();
    }
  };

  return {
    handleButtonClick,
    showModal,
    modalMessage,
    onCloseModal: () => setShowModal(false)
  };
}

export default useCartActions;
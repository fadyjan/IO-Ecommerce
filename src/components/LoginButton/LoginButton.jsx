import React, { useState } from "react";
import ModalPopUp from "../ModalPopUp/ModalPopUp";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/ReduxSlices/AuthSlice";

import "./LoginButton.css";
const LoginButton = ({ usernameRef, passwordRef }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const dispatch = useDispatch();
  const handleLogin = () => {
    const postData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    setIsModalOpen(true);
    dispatch(login(postData));
  };

  const tokenRequest = useSelector((state) => state.auth);

  return (
    <>
      <button type="submit" id="LoginInBtn" onClick={handleLogin}>
        LOG IN
      </button>
      {tokenRequest.loading && isModalOpen && (
        <ModalPopUp
          onClose={() => setIsModalOpen(false)}
          contentMessage={"Loading"}
        ></ModalPopUp>
      )}
      {!tokenRequest.loading && isModalOpen && tokenRequest.error ? (
        <ModalPopUp
          onClose={() => setIsModalOpen(false)}
          contentMessage={tokenRequest.error}
        ></ModalPopUp>
      ) : null}
      {!tokenRequest.loading && isModalOpen && tokenRequest.userToken ? (
        <ModalPopUp
          onClose={() => setIsModalOpen(false)}
          contentMessage={"LoginSuccesfully"}
        ></ModalPopUp>
      ) : null}
    </>
  );
};

export default LoginButton;

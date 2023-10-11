import React, { useRef } from "react";
import "./LoginPage.css";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";

const LoginPage = () => {
  return (
    <div id="LoginPage">
      <div id="LoginComponentWrapper">
        <Login></Login>
        <SignUp></SignUp>
      </div>
    </div>
  );
};

export default LoginPage;

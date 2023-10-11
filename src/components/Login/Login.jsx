import React, { useRef } from "react";
import "./Login.css";
import LoginButton from "../LoginButton/LoginButton";
import { useSelector } from "react-redux";

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const tokenRequest = useSelector((state) => state.auth);

  return (
    <div id="loginSectionWrapper">
      <h2>LOG IN</h2>
      {tokenRequest.userToken == "" ? (
        <>
          <div className="form-group">
            <input
              type="text"
              id="mail"
              placeholder="email"
              autoComplete="off"
              className="form-control"
              required
              ref={usernameRef}
            />
            <label className="form-label">E-MAIL</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              id="pwd"
              placeholder="password"
              className="form-control"
              required
              ref={passwordRef}
            />
            <label className="form-label">PASSWORD</label>
          </div>
          <p title="Not Implemented Yet" id="ForgetPassword">
            HAVE YOU FORGOTTEN YOUR PASSWORD?
          </p>
          <LoginButton
            usernameRef={usernameRef}
            passwordRef={passwordRef}
          ></LoginButton>
        </>
      ) : (
        <>
          <h1>Hello Fady You Signed In successfully</h1>
        </>
      )}
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import "./NavBarAvatar.css";
import AvatarrIcon from "../../assets/images/image-avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { removeUserToken } from "../../store/ReduxSlices/AuthSlice";
import { emptyCart } from "../../store/ReduxSlices/CartSlice";
import ModalPopUp from "../ModalPopUp/ModalPopUp";
import useOnclickOutside from "react-cool-onclickoutside";

const NavBarAvatar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const isLogin = useSelector((state) => state.auth.userToken);
  const dipatch = useDispatch();

  const handleToggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  // Function that will be fire if the user already loggedin 
  const HandleLogOut = () => {
    dipatch(removeUserToken());
    dipatch(emptyCart());
    setMessageContent("Hope to see you soon");
    setIsModalOpen(true);
    setDropdownVisible(false);
  };
  
  // Function that will be fire if the user not logged in 
  const HandleShowMessage = () => {
    setMessageContent("You have to log in first")
    setIsModalOpen(true);
    setDropdownVisible(false);
  };
  const ref = useOnclickOutside(() => {
    setDropdownVisible(false);
  });

  return (
    <div onClick={handleToggleDropdown} ref={ref}>
      <img id="AvatarIcon" src={AvatarrIcon}></img>
      {isDropdownVisible && (
        <div id="avatarDropdown">
          <ul>
            <li onClick={isLogin != "" ? HandleLogOut : HandleShowMessage}>
              Log Out
            </li>
          </ul>
        </div>
      )}
      {isModalOpen ? (
        <ModalPopUp
          contentMessage={messageContent}
          onClose={() => setIsModalOpen(false)}
        ></ModalPopUp>
      ) : null}
    </div>
  );
};

export default NavBarAvatar;

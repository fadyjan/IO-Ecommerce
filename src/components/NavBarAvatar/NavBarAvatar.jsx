import React, { useState } from "react";
import "./NavBarAvatar.css";
import AvatarrIcon from "../../assets/images/image-avatar.png";
import { useDispatch } from "react-redux";
import { removeUserToken } from "../../store/ReduxSlices/AuthSlice";
import ModalPopUp from "../ModalPopUp/ModalPopUp";
const NavBarAvatar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dipatch = useDispatch();

  const handleToggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  const HandleLogOut = () => {
    dipatch(removeUserToken());
    setIsModalOpen(true)
    setDropdownVisible(false)
  };

  const HandlePopUp = () => {};

  return (
    <div onClick={handleToggleDropdown}>
      <img id="AvatarIcon" src={AvatarrIcon}></img>
      {isDropdownVisible && (
        <div id="avatarDropdown">
          <ul>
            <li onClick={HandleLogOut}>Log Out</li>
          </ul>
        </div>
      )}
      {isModalOpen ? (
        <ModalPopUp
          contentMessage={"Hope to see you soon"}
          onClose={() => setIsModalOpen(false)}
        ></ModalPopUp>
      ) : null}
    </div>
  );
};

export default NavBarAvatar;

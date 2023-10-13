import React, { useState } from "react";
import "./NavBarAvatar.css";
import AvatarrIcon from "../../assets/images/image-avatar.png";
import { useDispatch } from "react-redux";
import { removeUserToken } from "../../store/ReduxSlices/AuthSlice";
import { emptyCart } from "../../store/ReduxSlices/CartSlice";
import ModalPopUp from "../ModalPopUp/ModalPopUp";
import useOnclickOutside from "react-cool-onclickoutside";

const NavBarAvatar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dipatch = useDispatch();

  const handleToggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  const HandleLogOut = () => {
    dipatch(removeUserToken());
    dipatch(emptyCart())
    setIsModalOpen(true)
    setDropdownVisible(false)
  };
  const ref = useOnclickOutside(() => {
    setDropdownVisible(false);
  });

  return (
    <div onClick={handleToggleDropdown} ref={ref}>
      <img id="AvatarIcon" src={AvatarrIcon} ></img>
      {isDropdownVisible && (
        <div id="avatarDropdown" >
          <ul>
            <li  onClick={HandleLogOut}>Log Out</li>
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

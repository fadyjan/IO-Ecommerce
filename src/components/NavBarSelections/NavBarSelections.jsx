import React from "react";
import "./NavBarSelections.css";
import { Link } from "react-router-dom";
const NavBarSelections = ({HandleCLosingMenu}) => {
  const handleLinkClick = () => {
    // to make sure that the current viewport is mobile 
    if (HandleCLosingMenu) {
      HandleCLosingMenu();
    }
  };
  return (
    <ul id="NavBarSelections">
      <li>
        <Link to="./" onClick={handleLinkClick}>Home</Link>
      </li>
      <li>
        <Link to="/AllProducts" onClick={handleLinkClick}>All Products</Link>
      </li>

      <li>
        <Link to="/Categories" onClick={handleLinkClick}>Categories</Link>
      </li>
      
      <li>
        <Link to="/login" onClick={handleLinkClick}> Log in </Link>
      </li>
    </ul>
  );
};

export default NavBarSelections;

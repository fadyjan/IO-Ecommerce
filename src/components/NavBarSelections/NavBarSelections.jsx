import React from "react";
import "./NavBarSelections.css";
import { Link } from "react-router-dom";
const NavBarSelections = () => {
  return (
    <ul id="NavBarSelections">
      <li>
        <Link to="./">Home</Link>
      </li>
      <li>
        <Link to="/AllProducts">All Products</Link>
      </li>

      <li>
        <Link to="/Categories">Categories</Link>
      </li>
      
      <li>
        <Link to="/login">Log in </Link>
      </li>
    </ul>
  );
};

export default NavBarSelections;

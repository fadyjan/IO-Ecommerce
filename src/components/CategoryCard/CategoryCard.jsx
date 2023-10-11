import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";
const CategoryCard = ({ CategoryImage, categoryTitle }) => {
  return (
    <div className="CategoryWrapper">
      <Link to={`/Categories/${categoryTitle}`}>
        <img src={CategoryImage}></img>
        <div className="CategoryInfo">
          <label>{categoryTitle}</label>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;

import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({ item }) => {
  return (
    <div className="CardWrapper">
      <div className="ImageWrapper">
        <Link to={`/products/${item.id}`}>
          <img className="ProductImage" src={item.image}></img>
        </Link>
      </div>
      <div className="InfoWrapper">
        <Link to={`/products/${item.id}`}>
          <label className="ProcutTitle">{item.title}</label>
        </Link>
        <label className="ProcutProce">
          {item.price}
          {"$"}
        </label>
      </div>
    </div>
  );
};

export default Card;

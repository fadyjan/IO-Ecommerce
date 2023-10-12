import React from "react";
import "./ProductProfileShimmerLoading.css";
const ProductProfileShimmerLoading = () => {
  return (
    <div id="ProductProfileWrapper">
      <div
        id="ProductProfileIamge"
        className="skeleton-loader"
        style={{ width: "100%" }}
      ></div>
      <div id="ProductProfileInfo">
        <div
          className="skeleton-loader"
          style={{ width: "80%", height: "10%", margin: "20px 0" }}
        ></div>
        <div
          className="skeleton-loader"
          style={{ width: "90%", height: "20%", margin: "10px 0" }}
        ></div>
        <div
          className="skeleton-loader"
          style={{ width: "50%", height: "5%", margin: "20px 0" }}
        ></div>
        <div id="AddToCartSection">
          <div
            id="ProductCounterWrapper"
            className="skeleton-loader"
            style={{
              width: "100%",
              height: "60px",
              display: "inline-block",
              margin: "0 10px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProductProfileShimmerLoading;

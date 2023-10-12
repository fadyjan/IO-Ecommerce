import React from "react";
import Card from "../../components/Card/Card";
import { renderShimmers } from "../../utils/helperFunctions";

const ProductsWrapper = ({ AllProducts }) => {
  return (
    <div id="AllProductsPage">
      {AllProducts.loading && renderShimmers()}
      {!AllProducts.loading && AllProducts.error ? (
        <h1>{AllProducts.error}</h1>
      ) : null}
      {!AllProducts.loading && AllProducts.allProducts.length
        ? AllProducts.allProducts.map((item) => {
            return <Card key={item.id} item={item}></Card>;
          })
        : null}
    </div>
  );
};

export default ProductsWrapper;

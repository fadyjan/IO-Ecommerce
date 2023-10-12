import React from "react";
import Card from "../../components/Card/Card";
import { renderShimmers } from "../../utils/helperFunctions";
import "./ProductsWrapper.css";
import useProductFilter from "../../hooks/useProductFilter";
import SearchController from "../SearchController/SearchController";
const ProductsWrapper = ({ AllProducts }) => {
  const [displayProducts, filterProducts] = useProductFilter(
    AllProducts.allProducts
  );

  const onChangeHandler = (e) => {
    const SearchInput = e.target.value.toLowerCase();
    filterProducts(SearchInput);
  };

  return (
    <div id="AllProductsPage">
      {AllProducts.loading && (
        <div className="LoadingShimmers">{renderShimmers()}</div>
      )}
      {!AllProducts.loading && AllProducts.error && (
        <h1>{AllProducts.error}</h1>
      )}
      {!AllProducts.loading && AllProducts.allProducts.length && (
        <>
          <SearchController onChange={onChangeHandler} />
          <div className="CardsWarpper">
            {displayProducts.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsWrapper;

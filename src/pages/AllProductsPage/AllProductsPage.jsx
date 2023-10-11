import React, { useEffect } from "react";
import "./AllProductsPage.css";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/ReduxSlices/AllProductsSlice";
const  AllProductsPage = () => {
  const AllProducts = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div id="AllProductsPage">
      {AllProducts.loading && <h1>Loading</h1>}
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

export default AllProductsPage

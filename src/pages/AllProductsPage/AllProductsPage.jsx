import React, { useEffect } from "react";
import "./AllProductsPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/ReduxSlices/AllProductsSlice";
import ProductsWrapper from "../../components/ProductsWrapper/ProductsWrapper";
const AllProductsPage = () => {
  const AllProducts = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    AllProducts.allProducts.length == 0 ? dispatch(getAllProducts()) : null;
  }, []);

  return <ProductsWrapper AllProducts={AllProducts} />;
};

export default AllProductsPage;

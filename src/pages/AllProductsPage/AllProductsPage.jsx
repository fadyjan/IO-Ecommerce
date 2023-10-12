import React, { useEffect } from "react";
import "./AllProductsPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/ReduxSlices/AllProductsSlice";
import ProductsWrapper from "../../components/ProductsWrapper/ProductsWrapper";
const  AllProductsPage = () => {
  const AllProducts = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <ProductsWrapper AllProducts={AllProducts}/>
  );
};

export default AllProductsPage

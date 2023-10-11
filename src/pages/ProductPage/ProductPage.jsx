import React from "react";
import "./ProductsPage.css";
import { useParams } from "react-router-dom";
import ProductProfile from "../../components/ProductProfile/ProductProfile";
const ProductPage = () => {
  const params = useParams();
  return <ProductProfile ProductID = {params.id}></ProductProfile>
};

export default ProductPage;

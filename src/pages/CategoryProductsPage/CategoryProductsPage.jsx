import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts } from "../../store/ReduxSlices/CategoryProductsSlice";
import ProductsWrapper from "../../components/ProductsWrapper/ProductsWrapper";

const CategoryProductsPage = () => {
  const AllProducts = useSelector((state) => state.categoryProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryProducts(params.CategoryName));
  }, []);
  const params = useParams();

  return <ProductsWrapper AllProducts={AllProducts} />;
};

export default CategoryProductsPage;

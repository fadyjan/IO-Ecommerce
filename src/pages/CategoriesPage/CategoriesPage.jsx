import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../store/ReduxSlices/AllCategoriesSlice";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import "./CategoriesPage.css";
import Jewelery from "../../assets/images/jewelery.jpg";
import womenclothing from "../../assets/images/womenclothing.jpg";
import menclothing from "../../assets/images/menclothing.jpg";
import electronics from "../../assets/images/electronics.png";
const CategoriesCovers = [electronics, Jewelery, menclothing, womenclothing];
const CategoriesPage = () => {
  const AllCategories = useSelector((state) => state.allCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <div id="CategoriesPageWrapper">
      {AllCategories.loading && <h1>Loading</h1>}
      {!AllCategories.loading && AllCategories.error ? (
        <h1>{AllCategories.error}</h1>
      ) : null}
      {!AllCategories.loading && AllCategories.allCategories.length
        ? AllCategories.allCategories.map((category, index) => {
            return (
              <CategoryCard
                key={index}
                CategoryImage={CategoriesCovers[index]}
                categoryTitle={category}
              ></CategoryCard>
            );
          })
        : null}
    </div>
  );
};

export default CategoriesPage;

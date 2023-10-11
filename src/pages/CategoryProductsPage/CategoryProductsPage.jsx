import React,{useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts } from "../../store/ReduxSlices/CategoryProductsSlice";
import Card from '../../components/Card/Card';
const CategoryProductsPage = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const AllProducts = useSelector((state) => state.categoryProducts);

    useEffect(() => {
      dispatch(getCategoryProducts(params.CategoryName));
    }, []);
    console.log(AllProducts);
  return (
    <div id="AllProductsPage">
    {AllProducts.loading && <h1>Loading</h1>}
    {!AllProducts.loading && AllProducts.error ? (
      <h1>{AllProducts.error}</h1>
    ) : null}
    {!AllProducts.loading && AllProducts.categoryProducts.length
      ? AllProducts.categoryProducts.map((item) => {
          return <Card key={item.id} item={item}></Card>;
        })
      : null}
  </div>
  )
}

export default CategoryProductsPage
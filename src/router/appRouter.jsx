import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AllProductsPage from "../pages/AllProductsPage/AllProductsPage";
import NavBarRoot from "../pages/NavBarRoot/NavBarRoot";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import CategoryProductsPage from "../pages/CategoryProductsPage/CategoryProductsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarRoot />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/AllProducts",
        element: <AllProductsPage />,
      },
      {
        path: "/Categories",
        element: <CategoriesPage />,
      },
      {
        path: "/Categories/:CategoryName",
        element: <CategoryProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductPage />,
      },      {
        path: "/login",
        element: <LoginPage/>,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;

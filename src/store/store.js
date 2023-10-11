import { configureStore } from '@reduxjs/toolkit'
import AllProductsSlice from './ReduxSlices/AllProductsSlice'
import SingleProductSlice from './ReduxSlices/SingleProductSlice'
import AllCategoriesSlice from './ReduxSlices/AllCategoriesSlice'
import CategoryProductsSlice from './ReduxSlices/CategoryProductsSlice'
import AuthSlice from './ReduxSlices/AuthSlice'
import CartSlice from './ReduxSlices/CartSlice'
export const store = configureStore({
  reducer: {
    allProducts:AllProductsSlice,
    singleProduct:SingleProductSlice,
    allCategories:AllCategoriesSlice,
    categoryProducts:CategoryProductsSlice,
    auth:AuthSlice,
    cart : CartSlice
  },
})
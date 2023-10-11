import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  categoryProducts: [], 
  loading: false,
  error: '',
};

export const getCategoryProducts = createAsyncThunk('advice/getCategoryProducts', (CategoryName) => {
  return axios.get(`https://fakestoreapi.com/products/category/${CategoryName}`).then((response) => {
    return response.data
  });
});

export const AllCategoriesSlice = createSlice({
  name: 'categoryProducts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategoryProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.categoryProducts = action.payload; 
      state.error = '';
    });
    builder.addCase(getCategoryProducts.rejected, (state, action) => {
      state.loading = false;
      state.categoryProducts = [];
      state.error = action.error.message;
    });
  },
});

export default AllCategoriesSlice.reducer; // Export the reducer

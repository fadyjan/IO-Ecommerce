import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  allProducts: [],
  loading: false,
  error: '',
};

export const getAllProducts = createAsyncThunk('advice/getAllProducts', () => {
  return axios.get('https://fakestoreapi.com/products').then((response) => {
    return response.data
  });
});

export const AllProductsSlice = createSlice({
  name: 'allProducts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = '';
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.allProducts = [];
      state.error = action.error.message;
    });
  },
});
export default AllProductsSlice.reducer; 

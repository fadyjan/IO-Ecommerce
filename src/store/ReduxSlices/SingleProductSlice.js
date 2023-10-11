import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  product: '', 
  loading: false,
  error: '',
};

export const getProduct = createAsyncThunk('advice/getProduct', (id) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
    return response.data
  });
});

export const SingleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload; 
      state.error = '';
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = false;
      state.product = '';
      state.error = action.error.message;
    });
  },
});

export default SingleProductSlice.reducer; // Export the reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  allCategories: [], 
  loading: false,
  error: '',
};

export const getAllCategories = createAsyncThunk('advice/getAllCategories', () => {
  return axios.get('https://fakestoreapi.com/products/categories').then((response) => {
    return response.data
  });
});

export const AllCategoriesSlice = createSlice({
  name: 'allCategories',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.allCategories = action.payload; 
      state.error = '';
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.loading = false;
      state.allCategories = [];
      state.error = action.error.message;
    });
  },
});

export default AllCategoriesSlice.reducer; // Export the reducer

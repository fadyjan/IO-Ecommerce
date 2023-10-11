import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    userToken: localStorage.getItem('userToken') || '', 
    loading: false,
    error: '',
};

export const login = createAsyncThunk('advice/login', (postData) => {
    return axios.post(`https://fakestoreapi.com/auth/login`, postData).then((response) => {
        localStorage.setItem('userToken', response.data.token)
        return response.data
    })
});

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        removeUserToken: (state) => {
            state.userToken = ''; // Clear userToken from state
            localStorage.removeItem('userToken'); // Remove userToken from local storage
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.userToken = action.payload.token; 
            state.error = '';
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.userToken = '';
            state.error = action.error.message;
        });
    },
});
export const { removeUserToken } = AuthSlice.actions; // Export the removeUserToken action

export default AuthSlice.reducer; // Export the reducer

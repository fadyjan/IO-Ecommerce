import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartProducts: [],
};


export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.cartProducts.push(action.payload);

        },
        removeProduct: (state, action) => {
            const productIdToDelete = action.payload;
            state.cartProducts = state.cartProducts.filter(
                (product) => product.id != productIdToDelete
            );
        },
        emptyCart :(state)=>{
            state.cartProducts = []
        }

    },
});
export const { addProduct, removeProduct ,emptyCart } = CartSlice.actions; // Export the removeProduct action

export default CartSlice.reducer; // Export the reducer

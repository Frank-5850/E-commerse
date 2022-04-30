import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    updateCart: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.cart.find((p) => p._id === id);
      product.quantity = parseInt(product.quantity) + parseInt(quantity);
    },
  },
});

export const { addToCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;

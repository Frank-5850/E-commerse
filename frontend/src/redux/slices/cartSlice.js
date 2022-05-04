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
    updateQuantity: (state, action) => {
      console.log(action.payload);
      const { id, quantity } = action.payload;
      const product = state.cart.find((p) => p._id === id);
      console.log(product);
      product.quantity = parseInt(quantity);
    },
  },
});

export const { addToCart, updateCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import formToggleSlice from "./slices/formToggleSlice";
import authSlice from "./slices/authSlice";
import successSlice from "./slices/successSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    formToggleSlice,
    authSlice,
    successSlice,
    cartSlice,
  },
});

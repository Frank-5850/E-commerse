import { configureStore } from "@reduxjs/toolkit";
import formToggleSlice from "./slices/formToggleSlice";
import authSlice from "./slices/authSlice";
import successSlice from "./slices/successSlice";

export const store = configureStore({
  reducer: {
    formToggleSlice,
    authSlice,
    successSlice,
  },
});

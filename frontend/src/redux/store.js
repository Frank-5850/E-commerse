import { configureStore } from "@reduxjs/toolkit";
import formToggleSlice from "./slices/formToggleSlice";

export const store = configureStore({
  reducer: {
    formToggle: formToggleSlice,
  },
});

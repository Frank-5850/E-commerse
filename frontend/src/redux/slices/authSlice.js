import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    isAuthenticated: (state) => {
      state.value -= 1;
    },
  },
});

export const { setCurrentUser, isAuthenticated } = authSlice.actions;

export default authSlice.reducer;

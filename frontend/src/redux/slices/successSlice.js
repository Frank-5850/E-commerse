import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const successSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload.success;
      state.msg = action.payload.msg;
    },
  },
});

export const { setSuccess } = successSlice.actions;

export default successSlice.reducer;

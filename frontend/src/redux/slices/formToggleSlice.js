import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signin: false,
  signup: false,
};

export const formToggleSlice = createSlice({
  name: "formToggle",
  initialState,
  reducers: {
    toggleBetweenSigninAndSignup: (state) => {
      state.signin = !state.signin;
      state.signup = !state.signup;
    },
    showSignin: (state) => {
      state.signin = !state.signin;
    },
    showSignup: (state) => {
      state.signup = !state.signup;
    },
  },
});

export const { toggleBetweenSigninAndSignup, showSignin, showSignup } =
  formToggleSlice.actions;

export default formToggleSlice.reducer;

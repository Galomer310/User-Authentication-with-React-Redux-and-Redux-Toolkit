import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logOutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { setUser, loginUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;

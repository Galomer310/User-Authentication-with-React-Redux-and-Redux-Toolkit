import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../components/state/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

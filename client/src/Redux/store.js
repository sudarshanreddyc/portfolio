import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loader";

const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
});

export default store;

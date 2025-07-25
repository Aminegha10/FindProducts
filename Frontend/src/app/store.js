import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products.js";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { products } from "./products";

export const store = configureStore({
  reducer: {
    [products.reducerPath]: products.reducer, // RTK Query API for Products
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(products.middleware),
});

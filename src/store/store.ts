import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/product.slice.ts";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

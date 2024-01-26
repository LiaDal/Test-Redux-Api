import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../../models/product.model";

export interface ProductState {
  products: ProductModel[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProductsAction } = productSlice.actions;

export default productSlice.reducer;

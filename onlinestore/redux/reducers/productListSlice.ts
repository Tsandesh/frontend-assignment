import { IProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  products: IProduct[];
}

const initialState: CounterState = {
  products: [],
};

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProducts } = productListSlice.actions;

export default productListSlice.reducer;

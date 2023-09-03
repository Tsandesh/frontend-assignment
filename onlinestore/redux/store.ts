import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./reducers/productListSlice";

export const store = configureStore({
  reducer: {
    productList: productListSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

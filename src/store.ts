import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import productSlice from "./slices/productSlice";
import orderSlice from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    orders: orderSlice,
  },
});
export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

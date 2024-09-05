import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
export type AppStore = typeof store; 
export type AppState = ReturnType<typeof store.getState>;
export default store;

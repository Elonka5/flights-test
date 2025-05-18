import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../slice/cartSlice";
import { cartMiddleware } from "./middleware";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

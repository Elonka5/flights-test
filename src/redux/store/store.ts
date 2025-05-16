
import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "../slice/cartSlice";
import { favoriteReducer } from "../slice/favoriteFlightSlice";
import { cartMiddleware, favoritesMiddleware } from "./middleware";
import { flightsReducer } from "../slice/flightsSlice";

export const store = configureStore({
  reducer: {
    flights: flightsReducer,
    cart: cartReducer,
    favorites: favoriteReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(cartMiddleware,favoritesMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

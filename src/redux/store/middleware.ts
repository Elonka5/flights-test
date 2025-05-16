
import type { Middleware } from "@reduxjs/toolkit";
// import type { RootState } from "./store";

export const cartMiddleware: Middleware = store => next => action => {
  const result = next(action);
  const state = store.getState();
  const cart = state.cart;
  localStorage.setItem("cart", JSON.stringify(cart));
  return result;
};

export const favoritesMiddleware: Middleware = store => next => action => {
  const result = next(action);
  const state = store.getState();
  const favorites = state.favorites;
  localStorage.setItem("favorites", JSON.stringify(favorites.favoriteFlights));
  return result;
};
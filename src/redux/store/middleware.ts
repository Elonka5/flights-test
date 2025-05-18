
import type { Middleware } from "@reduxjs/toolkit";


export const cartMiddleware: Middleware = store => next => action => {
  const result = next(action);
  const state = store.getState();
  const cart = state.cart;
  localStorage.setItem("cart", JSON.stringify(cart.tickets));
  return result;
};

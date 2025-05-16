import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Ticket } from "../../types/types";

interface CartState {
    tickets:Ticket[],
}


const initialState: CartState = {
  tickets: JSON.parse(localStorage.getItem("cart") || "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<Ticket>) => {
      state.tickets.push(action.payload);
    },
    removeTicket: (state, action: PayloadAction<string>) => {
      state.tickets = state.tickets.filter(ticket => ticket.flightId !== action.payload);
    },
    clearCart: state => {
      state.tickets = [];
    },
  },
});

export const { addTicket, removeTicket, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
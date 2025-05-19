import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Ticket } from "../../types/types";

interface CartState {
    tickets:Ticket[],
}

interface RemoveTicketPayload {
  id: string;
  seat: string;
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
    removeTicket: (state, action: PayloadAction<RemoveTicketPayload>) => {
      state.tickets = state.tickets.filter(
        ticket =>
          !(ticket.id === action.payload.id && ticket.seat === action.payload.seat)
      );
    },
    clearCart: state => {
      state.tickets = [];
    },
  },
});

export const { addTicket, removeTicket, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
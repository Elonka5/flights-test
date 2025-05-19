export interface Tickets {
  total: number;
  remaining: number;
}

export interface FlightBase {
  id: string;
  airline: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  terminal: string;
  gate: string;
}

export interface Flight extends FlightBase {
  tickets: Tickets;
}

export type SeatStatus = "free" | "occupied" | "selected";

export interface Ticket extends FlightBase {
  seat: string;
  status: SeatStatus;
  class: "economy" | "business";
}

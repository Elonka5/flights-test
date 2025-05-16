export interface Tickets {
  total: number
  remaining: number
}

export interface Flight {
  id: string
  airline: string
  from: string
  to: string
  departureTime: string
  arrivalTime: string 
  price: number
  terminal: string
  gate: string
  tickets: Tickets
}

export interface Ticket {
  flightId: string;
  seat: string;
  price: number;
  airline: string;
  from: string;
  to: string;
}
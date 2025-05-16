import type { RootState } from "../store/store";

export const selectFlights = (state: RootState) => state.flights.flights;
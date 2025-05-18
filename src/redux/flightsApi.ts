import axios from "axios";
import type { Flight } from "../types/types";

const BASE_URL = "https://679d13f487618946e6544ccc.mockapi.io/testove/v1";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getFlights = async (): Promise<Flight[]> => {
  try {
    const { data } = await instance.get<Flight[]>("/flights");
    return data;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    throw new Error(`Failed to fetch flights: ${message}`);
  }
};

export const getFlightById = async (id: string): Promise<Flight> => {
  try {
    const { data } = await instance.get<Flight>(`/flights/${id}`);
    return data;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    throw new Error(`Failed to load flight details for ID ${id}: ${message}`);
  }
};
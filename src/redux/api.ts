import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Flight } from "../types/types";

const BASE_URL = "https://679d13f487618946e6544ccc.mockapi.io/testove/v1";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const fetchFlights = createAsyncThunk<
  Flight[],
  void,
  { rejectValue: string }
>("flights/fetchFlights", async (_, thunkApi) => {
  try {
    const { data } = await instance.get<Flight[]>("/flights");
    return data;
  } catch (error: unknown) {
    let errorMessage = "Failed to load flights. Please try again later.";
    if (error instanceof Error) {
      errorMessage = `Error while fetching flights: ${error.message}`;
    }
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const fetchFlightById = createAsyncThunk<
  Flight,
  string,
  { rejectValue: string }
>("flights/fetchFlightById", async (id, thunkApi) => {
  try {
    const { data } = await instance.get<Flight>(`/flights/${id}`);
    return data;
  } catch (error: unknown) {
    let errorMessage = `Failed to load flight details. Please check the flight ID or try again.`;
    if (error instanceof Error) {
      errorMessage = `Error while fetching flight ${id}: ${error.message}`;
    }
    return thunkApi.rejectWithValue(errorMessage);
  }
});

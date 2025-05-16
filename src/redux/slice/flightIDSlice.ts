import { createSlice } from "@reduxjs/toolkit";
import type { Flight } from "../../types/types";
import { fetchFlightById } from "../api";

interface FlightIDState {
    flight: Flight | null;
    isLoading: boolean;
    error: string | null;
  }

  const initialState:FlightIDState ={
    flight: null,
    isLoading: false,
    error: null,
  }

  const flightIdSlice = createSlice({
    name:"flightID",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
            builder.addCase(fetchFlightById.pending, state =>{
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchFlightById.fulfilled,(state,action) =>{
                state.flight = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchFlightById.rejected,(state,action) =>{
                state.isLoading = false;
                state.error = action.payload ?? 'Failed to fetch flight.';
            })
        }
  })

  export const flightsIdReducer = flightIdSlice.reducer;
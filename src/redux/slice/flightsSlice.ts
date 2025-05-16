import { createSlice } from "@reduxjs/toolkit";
import type { Flight } from "../../types/types";
import { fetchFlights } from "../api";


interface FlightsState {
flights: Flight[];
isLoading: boolean;
error: string | null;
}

const initialState: FlightsState ={
flights: [],
isLoading: false,
error: null,
}

const flightsSlice = createSlice({
    name:"flights",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchFlights.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchFlights.fulfilled,(state,action) =>{
            state.flights = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchFlights.rejected,(state,action) =>{
            state.isLoading = false;
            state.error = action.payload ?? 'Failed to fetch flights.';
        })
    }
})

export const flightsReducer = flightsSlice.reducer;
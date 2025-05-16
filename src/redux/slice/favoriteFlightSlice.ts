import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteState {
  favoriteFlights:string[];
}

const initialState: FavoriteState = {
   favoriteFlights: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.favoriteFlights.includes(id)) {
        state.favoriteFlights = state.favoriteFlights.filter(favFlight => favFlight !== id);
      } else {
        state.favoriteFlights.push(id);
      }
    },
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favoriteFlights = action.payload;
    },
  },
});

export const { toggleFavorite, setFavorites } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;

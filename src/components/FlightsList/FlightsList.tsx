import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Typography,
  CircularProgress,
  Box,
  TextField,
} from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import type { Flight } from "../../types/types";
import BasicCard from "../FlightCard/FlightCard";
import { getFlights } from "../../redux/flightsApi";

const FlightsList: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );
  const [filter, setFilter] = useState<string>("");
  const navigate = useNavigate();


  useEffect(() => {
    const fetchFlights = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getFlights(); 
        setFlights(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch flights.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchFlights();
  }, []);


  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);


  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  // Фільтрація рейсів
  const filteredFlights = flights.filter(
    (flight) =>
      flight.from.toLowerCase().includes(filter.toLowerCase()) ||
      flight.to.toLowerCase().includes(filter.toLowerCase())
  );

  if (isLoading) return <CircularProgress sx={{ display: "block", mx: "auto", mt: 4 }} />;
  if (error) return <Typography color="error" align="center">{error}</Typography>;

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Available Flights
      </Typography>
      <TextField
        label="Filter by destination"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        fullWidth
        sx={{ mb: 3 }}
      />
      <Grid component="ul" container spacing={2}>
        {filteredFlights.map((flight) => (
          
            <BasicCard
            key={flight.id}
              flight={flight}
              onClick={() => navigate(`/flights/${flight.id}`)}
              isFavorite={favorites.includes(flight.id)}
              toggleFavorite={toggleFavorite}
              // action={
              //   <IconButton onClick={() => toggleFavorite(flight.id)}>
              //     {favorites.includes(flight.id) ? (
              //       <FavoriteIcon color="error" />
              //     ) : (
              //       <FavoriteBorderIcon />
              //     )}
              //   </IconButton>
              // }
            />
          
        ))}
      </Grid>
    </Box>
  );
};

export default FlightsList;
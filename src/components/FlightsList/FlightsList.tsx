import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Typography,
  CircularProgress,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { getFlights } from "../../redux/flightsApi";
import type { Flight } from "../../types/types";
import {
  flightsInputWrapper,
  inputLabelStyles,
  inputStyles,
  listWrapper,
  selectStyles,
  titleStyles,
} from "./FlightsList.styles";

import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AirlinesIcon from "@mui/icons-material/Airlines";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FlightCard from "../FlightCard/FlightCard";

const FlightsList: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );
  const [filter, setFilter] = useState<string>("");
  const [airlineFilter, setAirlineFilter] = useState<string>("");
  const [priceSort, setPriceSort] = useState<string>("default");
  const navigate = useNavigate();

  const uniqueAirlines = React.useMemo(() => {
    return [
      "All",
      ...[...new Set(flights.map((flight) => flight.airline))].sort(),
    ];
  }, [flights]);

  useEffect(() => {
    const fetchFlights = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getFlights();
        setFlights(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to fetch flights."
        );
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

  const filteredAndSortedFlights = flights
    .filter(
      (flight) =>
        (flight.from.toLowerCase().includes(filter.toLowerCase()) ||
          flight.to.toLowerCase().includes(filter.toLowerCase())) &&
        (airlineFilter === "All" ||
          airlineFilter === "" ||
          flight.airline.toLowerCase().includes(airlineFilter.toLowerCase()))
    )
    .sort((a, b) => {
      if (priceSort === "priceAsc") return a.price - b.price;
      if (priceSort === "priceDesc") return b.price - a.price;
      return 0;
    });

  if (isLoading)
    return <CircularProgress sx={{ display: "block", mx: "auto", mt: 4 }} />;
  if (error)
    return (
      <Typography color="error" align="center">
        {error}
      </Typography>
    );

  return (
    <>
      <Box sx={flightsInputWrapper}>
        <TextField
          label={
            <span>
              <FmdGoodIcon sx={{ verticalAlign: "middle", marginRight: 0.5 }} />{" "}
              Filter by destination
            </span>
          }
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          fullWidth
          sx={inputStyles}
        />
        <FormControl fullWidth>
          <InputLabel sx={inputLabelStyles}>
            <AirlinesIcon sx={{ verticalAlign: "middle", marginRight: 0.5 }} />{" "}
            Filter by Airline
          </InputLabel>
          <Select
            value={airlineFilter}
            onChange={(e) => setAirlineFilter(e.target.value)}
            sx={selectStyles}
          >
            {uniqueAirlines.map((airline) => (
              <MenuItem key={airline} value={airline}>
                {airline}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel sx={inputLabelStyles}>
            <MonetizationOnIcon
              sx={{ verticalAlign: "middle", marginRight: 0.5 }}
            />{" "}
            Sort by Price
          </InputLabel>
          <Select
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value)}
            sx={selectStyles}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="priceAsc">Low to High</MenuItem>
            <MenuItem value="priceDesc">High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Typography component="h1" sx={titleStyles}>
        Available Flights
      </Typography>
      <Grid component="ul" container spacing={3} sx={listWrapper}>
        {filteredAndSortedFlights.map((flight) => (
          <FlightCard
            key={flight.id}
            flight={flight}
            onClick={() => navigate(`/flights/${flight.id}`)}
            isFavorite={favorites.includes(flight.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </Grid>
    </>
  );
};

export default FlightsList;

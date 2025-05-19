import { Box, CircularProgress, Grid, Paper, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch} from "../../redux/store/store";
import type { Flight, SeatStatus, Ticket } from "../../types/types";
import { addTicket, removeTicket } from "../../redux/slice/cartSlice";
import { selectCart } from "../../redux/selectors/cartSelectors";
import { getFlightById } from "../../redux/flightsApi";

import {
  rootContainer,
  seatsContainer,
  businessRow,
  economyRow,
  aisleSpacer,
  seatBox,
  getSeatStyle,
} from "./FlightDetails.styles";
const FlightDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const cartTickets = useSelector(selectCart);
  const theme = useTheme();

  const [flight, setFlight] = useState<Flight | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [seats, setSeats] = useState<Record<string, SeatStatus>>({});

  // Конфігурація літака
  const config = {
    business: { rows: 4, seatsPerRow: 4, layout: ["A", "C", "D", "F"] },
    economy: { rows: 20, seatsPerRow: 6, layout: ["A", "B", "C", "D", "E", "F"] },
  };

  useEffect(() => {
    if (!id) return;
    const fetchFlight = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getFlightById(id);
        setFlight(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Failed to fetch flight.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchFlight();
  }, [id]);

  useEffect(() => {
    if (!flight) return;

    const storedSeats = localStorage.getItem(`occupiedSeats_${flight.id}`);
    if (storedSeats) {
      setSeats(JSON.parse(storedSeats));
    } else {
      const totalSeats = flight.tickets.total;
      const occupiedCount = totalSeats - flight.tickets.remaining;
      const allSeatIds: string[] = [];
      const newSeats: Record<string, SeatStatus> = {};

      for (let row = 1; row <= config.business.rows; row++) {
        config.business.layout.forEach((seat) => {
          allSeatIds.push(`${seat}${row}`);
          newSeats[`${seat}${row}`] = "free";
        });
      }

      for (
        let row = config.business.rows + 1;
        row <= config.business.rows + config.economy.rows;
        row++
      ) {
        config.economy.layout.forEach((seat) => {
          allSeatIds.push(`${seat}${row}`);
          newSeats[`${seat}${row}`] = "free";
        });
      }

      const shuffledSeatIds = [...allSeatIds].sort(() => Math.random() - 0.5);
      for (let i = 0; i < occupiedCount; i++) {
        newSeats[shuffledSeatIds[i]] = "occupied";
      }

      setSeats(newSeats);
      localStorage.setItem(`occupiedSeats_${flight.id}`, JSON.stringify(newSeats));
    }
  }, [flight]);

  const toggleSeat = (seatId: string) => {
    if (!flight || seats[seatId] === "occupied") return;

    const alreadySelected = cartTickets.some(
      (t) => t.id === flight.id && t.seat === seatId
    );

    if (alreadySelected) {
      dispatch(removeTicket({ id: flight.id, seat: seatId }));
    } else {
      const isBusinessClass = parseInt(seatId.match(/\d+/)?.[0] || "0") <= config.business.rows;
      const ticket: Ticket = {
        ...flight,
      seat: seatId,
      price: isBusinessClass ? flight.price * 2 : flight.price,
      status: "selected",
      class: isBusinessClass ? "business" : "economy",
      };
      dispatch(addTicket(ticket));
    }
  };

  const renderSeats = () => {
    const seatRows = [];

    //  Рендер місць для Бізнес-класу
    for (let row = 1; row <= config.business.rows; row++) {
      const rowSeats = config.business.layout.map((seat) => {
        const seatId = `${seat}${row}`;
        const isSelected = cartTickets.some(
          (t) => flight && t.id === flight.id && t.seat === seatId
        );
        return (
          <Grid key={seatId}>
            <Box
              onClick={() => toggleSeat(seatId)}
              sx={{
                ...seatBox(theme, true),
                ...getSeatStyle(theme, seats[seatId] || "free", true, isSelected),
              }}
            >
              <Typography variant="body2">{seatId}</Typography>
            </Box>
          </Grid>
        );
      });

      seatRows.push(
        <Grid container key={`business-row-${row}`} sx={businessRow}>
          {rowSeats.slice(0, 2)}
          <Grid sx={aisleSpacer} />
          {rowSeats.slice(2)}
        </Grid>
      );
    }

    // Рендер місць для Економ-класу
    for (
      let row = config.business.rows + 1;
      row <= config.business.rows + config.economy.rows;
      row++
    ) {
      const rowSeats = config.economy.layout.map((seat) => {
        const seatId = `${seat}${row}`;
        const isSelected = cartTickets.some(
          (t) => flight && t.id === flight.id && t.seat === seatId
        );
        return (
          <Grid key={seatId}>
            <Box
              onClick={() => toggleSeat(seatId)}
              sx={{
                ...seatBox(theme, false),
                ...getSeatStyle(theme, seats[seatId] || "free", false, isSelected),
              }}
            >
              <Typography variant="body2">{seatId}</Typography>
            </Box>
          </Grid>
        );
      });

      seatRows.push(
        <Grid container key={`economy-row-${row}`} sx={economyRow}>
          {rowSeats.slice(0, 3)}
          <Grid sx={aisleSpacer} />
          {rowSeats.slice(3)}
        </Grid>
      );
    }

    return seatRows;
  };

    if (isLoading)
      return <CircularProgress sx={{ display: "block", mx: "auto", mt: 4 }} />;
    if (error)
      return (
        <Typography color="error" align="center">
          {error}
        </Typography>
      );
  if (!flight) return null;

  return (
    <Box sx={rootContainer}>
      <Paper sx={seatsContainer(theme)}>
        {renderSeats()}
      </Paper>
    </Box>
  );
};

export default FlightDetails;
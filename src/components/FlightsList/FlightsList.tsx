// import React from 'react'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../../redux/api";
import type { AppDispatch} from "../../redux/store/store";
import { selectFlights } from "../../redux/selectors/flightsSelector";

const FlightsList = () => {
     const dispatch = useDispatch<AppDispatch>();
     const  flights = useSelector(selectFlights);
console.log(flights);

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);
  return (
    <ul>
         {flights.map(flight => (
        <li key={flight.id}>{flight.airline}</li>
      ))}
    </ul>
  )
}

export default FlightsList
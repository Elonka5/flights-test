import { Box } from "@mui/material";

import { flightsSection } from "./FlightsSection.styles";
import Container from "../Container/Container";
import FlightsList from "../FlightsList/FlightsList";

const FlightSection = () => {
  return (
    <Box component="section" sx={flightsSection}>
      <Container>
        <FlightsList />
      </Container>
    </Box>
  );
};

export default FlightSection;

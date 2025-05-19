import { Box, Typography } from "@mui/material";
import { titleStyles } from "../../components/FlightsList/FlightsList.styles";
import {sectionStyles } from "../../components/FlightsSection/FlightsSection.styles";

import Container from "../../components/Container/Container";
import FlightDetails from "../../components/FlightDetails/FlightDetails";

const FlightDetailsPage = () => {
  return (
    <Box component="section" sx={sectionStyles}>
      <Container>
        <Typography component="h1" sx={titleStyles}>
          Select your seat
        </Typography>
        <FlightDetails />
      </Container>
    </Box>
  );
};

export default FlightDetailsPage;

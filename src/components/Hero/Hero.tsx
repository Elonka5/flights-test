import React from "react";
import { Box, Typography } from "@mui/material";
import {
  heroContent,
  heroTitle,
  heroSubtitle,
  heroSection,
} from "./Hero.styles";
import Container from "../Container/Container";

const Hero: React.FC = () => {
  return (
    <Box component="section" sx={heroSection}>
      <Container>
        <Box sx={heroContent}>
          <Typography sx={heroTitle}>
            It’s A Big World Out There, Go Explore!
          </Typography>

          <Typography sx={heroSubtitle}>
            We're here to make your travel dreams a reality. Our intuitive
            search engine scours thousands of flights to bring you the best
            deals tailored to your preferences and budget.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

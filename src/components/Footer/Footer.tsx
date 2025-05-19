import React from "react";
import { Box, Container, Typography} from "@mui/material";
import { footerStyles } from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    <Box sx={footerStyles}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} AirTickets. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
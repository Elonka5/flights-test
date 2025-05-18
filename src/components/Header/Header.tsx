import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import {
  AppBar,
  Toolbar,
  Typography,
  // Button,
  IconButton,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  appBar,
  toolbar,
  logoContainer,
  logoText,
  // homeButton,
  cartContainer,
  cartIcon,
  cartBadge,
} from "./Header.styles";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const cartTickets = useSelector((state: RootState) => state.cart.tickets);
  const cartCount = cartTickets.length; 

  return (
    <AppBar position="static" sx={appBar}>
      <Toolbar sx={toolbar}>

        <Box
          sx={logoContainer}
          onClick={() => navigate("/")}
          role="button"
          tabIndex={0}
        >
          <Typography sx={logoText}>AirTickets</Typography>
        </Box>

        
        {/* <Button
          sx={homeButton}
          onClick={() => navigate("/")}
          aria-label="Go to home page"
        >
          Home
        </Button> */}

        <IconButton
          sx={cartContainer}
          onClick={() => navigate("/cart")}
          aria-label={`Cart with ${cartCount} items`}
        >
          <ShoppingCartIcon sx={cartIcon} />
          {cartCount > 0 && <Box sx={cartBadge}>{cartCount}</Box>}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

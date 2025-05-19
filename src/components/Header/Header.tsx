import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import {
  appBar,
  toolbar,
  logoContainer,
  logoText,
  cartContainer,
  cartIcon,
  cartBadge,
} from "./Header.styles";
import { selectCart } from "../../redux/selectors/cartSelectors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const cartTickets = useSelector(selectCart);
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
          <img
            src="/public/favicon.svg"
            alt="Logo Icon"
            style={{ width: "30px", height: "30px", marginRight: "8px" }}
          />
          <Typography sx={logoText}>AirTickets</Typography>
        </Box>
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

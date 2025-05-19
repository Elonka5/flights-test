import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Card,
  IconButton,
  Divider,
  Grid,
  CardActions,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import type { AppDispatch } from "../../redux/store/store";
import { removeTicket } from "../../redux/slice/cartSlice";
import {
  cartIcon,
  deleteButton,
  classSeatWrapper,
  imgWrapper,
  titleWrapper,
} from "./CartComponent.styles";
import type { Ticket } from "../../types/types";
import { selectCart } from "../../redux/selectors/cartSelectors";
import { renderImgClass } from "../../helpers/renderImgClass";
import { listWrapper } from "../FlightsList/FlightsList.styles";
import {
  cardActionsWrapper,
  cardStyles,
  informationText,
  informationWrapper,
} from "../FlightCard/FlightCard.styles";

import DeleteIcon from "@mui/icons-material/Delete";
import CardTopComponent from "../CardTopComponent/CardTopComponent";
import Container from "../Container/Container";

const CartComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tickets = useSelector(selectCart);

  const handleRemoveTicket = (id: string, seat: string) => {
    dispatch(removeTicket({ id, seat }));
  };

  const totalPrice = tickets.reduce((sum, ticket) => sum + ticket.price, 0);

  return (
    <Container>
      <Box sx={titleWrapper}><ShoppingCartIcon sx={cartIcon} />
      <Typography variant="h5" component="h1">
        
        Your Cart
      </Typography></Box>

      {tickets.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <Grid component="ul" container spacing={3} sx={listWrapper}>
            {tickets.map((ticket: Ticket) => (
              <Card
                key={`${ticket.id}-${ticket.seat}`}
                component="li"
                sx={cardStyles}
              >
                <CardTopComponent item={ticket} />
                <Box sx={imgWrapper}>
                  <img
                    src={renderImgClass(ticket.class)}
                    alt={`Class ${ticket.class}`}
                    style={{
                      width: "200px",
                      objectFit: "cover",
                      marginLeft: "-15%",
                    }}
                  />
                  <Box sx={classSeatWrapper}>
                    <Typography variant="body2">
                      <strong>Class:</strong> {ticket.class}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Seat:</strong> {ticket.seat}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={informationWrapper}>
                  <Typography variant="body2" sx={informationText}>
                    <strong>Price:</strong> ${ticket.price}
                  </Typography>

                  <Typography variant="body2" sx={informationText}>
                    <strong>Terminal:</strong> {ticket.terminal}
                  </Typography>

                  <Typography variant="body2" sx={informationText}>
                    <strong>Gate:</strong> {ticket.gate}
                  </Typography>
                </Box>
                <CardActions sx={cardActionsWrapper}>
                  <IconButton
                    onClick={() => handleRemoveTicket(ticket.id, ticket.seat)}
                    sx={deleteButton}
                    aria-label={`Remove ticket for seat ${ticket.seat}`}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            ))}
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6">Total: ${totalPrice.toFixed(2)}</Typography>
        </>
      )}
    </Container>
  );
};

export default CartComponent;

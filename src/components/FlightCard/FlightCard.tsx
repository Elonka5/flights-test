import { Box, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import type { Flight } from "../../types/types";
import {
  cardActionsWrapper,
  cardStyles,
  informationText,
  informationWrapper,
} from "./FlightCard.styles";

import CardTopComponent from "../CardTopComponent/CardTopComponent";

interface BasicCardProps {
  flight: Flight;
  onClick: () => void;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
}
const FlightCard = ({
  flight,
  onClick,
  isFavorite,
  toggleFavorite,
}: BasicCardProps) => {
  const { id, price, terminal, gate, tickets } = flight;
  return (
    <Card component="li" sx={cardStyles} onClick={onClick}>
      <CardTopComponent item={flight} />
      <Box sx={informationWrapper}>
        <Typography variant="body2" sx={informationText}>
          <strong>Price:</strong> ${price}
        </Typography>

        <Typography variant="body2" sx={informationText}>
          <strong>Terminal:</strong> {terminal}
        </Typography>

        <Typography variant="body2" sx={informationText}>
          <strong>Gate:</strong> {gate}
        </Typography>

        <Typography variant="body2" sx={informationText}>
          <strong>Total:</strong> {tickets.total} tickets
        </Typography>
        <Typography variant="body2" sx={informationText}>
          <strong>Remaining:</strong> {tickets.remaining} tickets
        </Typography>
      </Box>

      <CardActions sx={cardActionsWrapper}>
        <Button size="small">Learn More</Button>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(id);
          }}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? (
            <FavoriteIcon sx={{ fill: "#ffad36" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default FlightCard;

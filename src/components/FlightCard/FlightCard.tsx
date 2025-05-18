// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { Flight } from "../../types/types";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
// import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
  const {
    id,
    airline,
    from,
    to,
    departureTime,
    arrivalTime,
    price,
    terminal,
    gate,
    tickets,
  } = flight;
  return (
    <Card component="li" sx={{ minWidth: 275 }} onClick={onClick}>
      {/* <Link to={`/flights/${flight.id}`} style={{ textDecoration: 'none' }}> */}
      <CardContent>
        <CompanyLogo company={airline} size={40} />
        <Typography variant="h6" component="h2" gutterBottom>
          {from} → {to}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Flight ID:</strong>
          {id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Airline:</strong> {airline}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Departure:</strong> {departureTime}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Arrival:</strong> {arrivalTime}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Price:</strong> ${price}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Terminal:</strong> {terminal}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Gate:</strong> {gate}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Tickets:</strong> {tickets.total} total / {tickets.remaining}{" "}
          remaining
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(id);
          }}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
      {/* </Link> */}
    </Card>
  );
};

export default FlightCard;

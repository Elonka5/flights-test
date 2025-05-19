import { Box, Typography } from "@mui/material";

import { renderNameCountry } from "../../helpers/renderNameCountry";
import {
  calculateFlightDuration,
  formatDate,
  formatTime,
} from "../../helpers/renderTime";
import type { Flight, Ticket } from "../../types/types";
import {
  logoIdWrapper,
  nameCountryWrapper,
  timeWrapper,
  timeStyles,
  timeTextStyles,
  dateStyles,
  arrivalWrapper,
} from "./CardTopComponent.styles";

import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CompanyLogo from "../CompanyLogo/CompanyLogo";

interface FlightTicketHeaderProps<T extends Flight | Ticket> {
  item: T;
}

const CardTopComponent = <T extends Flight | Ticket>({
  item,
}: FlightTicketHeaderProps<T>) => {
  const { airline, from, to, departureTime, arrivalTime, id } = item;

  return (
    <>
      <Box sx={logoIdWrapper}>
        <CompanyLogo company={airline} size={40} />
        <Typography variant="body2" component="h2">
          <strong>{airline}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {id}
        </Typography>
      </Box>
      <Box sx={nameCountryWrapper}>
        <Box>
          <Typography variant="h6" component="p" gutterBottom>
            {from}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {renderNameCountry(from)}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="p" gutterBottom>
            {to}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {renderNameCountry(to)}
          </Typography>
        </Box>
      </Box>
      <Box sx={timeWrapper}>
        <Box sx={timeStyles}>
          <Typography variant="body2" sx={timeTextStyles}>
            <strong>{formatTime(departureTime)}</strong>
          </Typography>
          <Typography variant="body2" sx={dateStyles}>
            {formatDate(departureTime)}
          </Typography>
        </Box>
        <Box sx={arrivalWrapper}>
          <Typography variant="body2" sx={dateStyles}>
            {calculateFlightDuration(departureTime, arrivalTime)}
          </Typography>
          <WatchLaterIcon sx={{ fill: "#ffad36" }} />
        </Box>
        <Box sx={timeStyles}>
          <Typography variant="body2" sx={timeTextStyles}>
            <strong>{formatTime(arrivalTime)}</strong>
          </Typography>
          <Typography variant="body2" sx={dateStyles}>
            {formatDate(arrivalTime)}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CardTopComponent;

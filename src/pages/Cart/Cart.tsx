import { Box } from "@mui/material";
import { sectionStyles } from "../../components/FlightsSection/FlightsSection.styles";
import CartComponent from "../../components/CartComponent/CartComponent";

const Cart = () => {
  return (
    <Box component="section" sx={sectionStyles}>
      <CartComponent />
    </Box>
  );
};

export default Cart;

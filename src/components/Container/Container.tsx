import React from "react";
import { Box} from "@mui/material";
import {divContainer} from "./Container.styles";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <Box sx={divContainer}>
      {children}
    </Box>
  );
};

export default Container;
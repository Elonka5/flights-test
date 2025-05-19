import type { Theme, SxProps } from "@mui/material";


export const flightsSection: SxProps<Theme> = (theme) => ({
  backgroundColor:theme.palette.secondary.main,
  pb:"32px",
});

export const sectionStyles: SxProps<Theme> = (theme) => ({
    backgroundColor:theme.palette.secondary.main,
    minHeight:"100vh",
py:"32px",
}  )
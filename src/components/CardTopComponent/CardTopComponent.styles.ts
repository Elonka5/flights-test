import type { Theme, SxProps } from "@mui/material";

export const logoIdWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  justifyContent: "space-between",
};

export const nameCountryWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const timeWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
};

export const timeStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const timeTextStyles: SxProps<Theme> = {
  color: "#ffad36",
  fontSize: "32px",
  fontWeight: "500",
};

export const dateStyles: SxProps<Theme> = (theme) => ({
  color: theme.palette.primary.main,
});

export const arrivalWrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 1,
};

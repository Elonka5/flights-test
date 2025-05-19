import type { Theme } from "@mui/material";

export const rootContainer = {
  maxWidth: 800,
  mx: "auto",
};


export const seatsContainer = (theme: Theme) => ({
  p: { xs: 2, md: 3 },
  bgcolor: theme.palette.grey[100],
  borderRadius: 2,
  elevation: 3,
});

export const businessRow = {
  gap: 2,
  mb: 2,
  justifyContent: "center",
};

export const economyRow = {
  gap: { xs: 1, sm: 2 },
  mb: 1,
  justifyContent: "center",
};

export const aisleSpacer = {
  width: { xs: 2, sm: 60 },
};

export const seatBox = (theme: Theme, isBusinessClass: boolean) => ({
  width: { xs: isBusinessClass ? 48 : 36, sm: isBusinessClass ? 60 : 50 },
  height: { xs: isBusinessClass ? 48 : 36, sm: isBusinessClass ? 60 : 50 },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 2,
  transition: theme.transitions.create(["background-color", "border"]),
});

export const getSeatStyle = (
  theme: Theme,
  status: "occupied" | "free" | "selected",
  isBusinessClass: boolean,
  isSelected: boolean
) => {
  if (status === "occupied") {
    return {
      bgcolor: theme.palette.grey[400],
      color: theme.palette.grey[700],
      cursor: "not-allowed",
      border: `1px solid ${theme.palette.grey[600]}`,
    };
  }
  if (isSelected) {
    return {
      bgcolor: theme.palette.success.light,
      color: theme.palette.success.contrastText,
      cursor: "pointer",
      border: `2px solid ${theme.palette.success.dark}`,
      fontWeight: "bold",
      "&:hover": { bgcolor: theme.palette.success.main },
    };
  }
  return {
    bgcolor: isBusinessClass
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
    color: theme.palette.text.primary,
    cursor: "pointer",
    border: isBusinessClass
      ? `1px solid ${theme.palette.success.dark}`
      : `1px solid ${theme.palette.divider}`,
    fontSize: isBusinessClass ? "1rem" : "0.875rem",
    "&:hover": {
      bgcolor: isBusinessClass
        ? theme.palette.secondary.main
        : theme.palette.grey[200],
    },
  };
};

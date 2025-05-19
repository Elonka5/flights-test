import type { Theme, SxProps } from "@mui/material";

export const rootContainer: SxProps<Theme> = {
  p: { xs: 2, sm: 3 },
  maxWidth: 800,
  mx: "auto",
};

export const titleWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  mb: 3,
};

export const cartIcon: SxProps<Theme> = {
  fontSize: { xs: "1.5rem", sm: "2rem" },
};

export const ticketCard: SxProps<Theme> = {
  mb: 2,
  p: 2,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 1,
};

export const ticketInfo: SxProps<Theme> = {
  flexGrow: 1,
  mr: 2,
};

export const deleteButton: SxProps<Theme> = {
  color: "error.main",
  "&:hover": {
    bgcolor: "error.light",
    color: "error.dark",
  },
};

export const totalPrice: SxProps<Theme> = {
  mt: 3,
  fontWeight: "bold",
  textAlign: "right",
};

export const imgWrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  pt: "16px",
  gap: 1,
};

export const classSeatWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 3,
};

import type { Theme, SxProps } from "@mui/material";


export const appBar: SxProps<Theme> = {
  bgcolor: "primary.main",
  boxShadow: 3,
};

export const toolbar: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  px: { xs: 2, sm: 3 },
};


export const logoContainer: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  cursor:"pointer"
};


export const logoText: SxProps<Theme> = {
  fontWeight: "bold",
  fontSize: { xs: "1.25rem", sm: "1.5rem" },
  color: "white",
  textDecoration: "none",
};


export const homeButton: SxProps<Theme> = {
  color: "white",
  fontSize: { xs: "0.875rem", sm: "1rem" },
  "&:hover": {
    bgcolor: "primary.dark",
  },
};


export const cartContainer: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  alignItems: "center",
};


export const cartIcon: SxProps<Theme> = {
  color: "white",
  fontSize: { xs: "1.5rem", sm: "1.75rem" },
};


export const cartBadge: SxProps<Theme> = {
  position: "absolute",
  top: -8,
  right: -8,
  bgcolor: "error.main",
  color: "white",
  borderRadius: "50%",
  width: 20,
  height: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.75rem",
  fontWeight: "bold",
};
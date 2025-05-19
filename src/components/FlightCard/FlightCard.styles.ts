import type { Theme, SxProps } from "@mui/material";

export const cardStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  width: "300px",
  gap: 2,
  p: "16px",
  cursor: "pointer",
};

export const informationWrapper: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  rowGap: 1,
  columnGap: 2,
  pt: "18px",
};

export const informationText: SxProps<Theme> = (theme) => ({
  p: "7px 14px",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "35px",
  fontSize: "12px",
});

export const cardActionsWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  p: "0",
};

import type { Theme, SxProps } from "@mui/material";

export const flightsInputWrapper: SxProps<Theme> = {
  position: "relative",
  m: "-45px auto 48px auto",
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: "center",
  gap: 2,
  width: { xs: "90%", md: "80", lg: "70%" },
  height: { xs: "90%", md: "80", lg: "70%" },
  p: "24px",
  borderRadius: "26px",
  bgcolor: "background.paper",
  boxShadow:
    "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);",
};

export const listWrapper: SxProps<Theme> = {
  width: "100%",
  justifyContent: "center",
};

export const titleStyles: SxProps<Theme> = {
  textAlign: "center",
  fontFamily: "Manrope",
  fontSize: { xs: "24px", sm: "24px", md: "48px" },
  mb: "32px",
};

export const inputStyles = {
  "& .MuiOutlinedInput-root": {
    height: "52px",
    outline: "none",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffad36",
      borderWidth: "2px",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffad36",
      borderWidth: "2px",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffad36",
    borderWidth: "2px",
    borderRadius: "8px",
  },
  "& .MuiInputBase-input": {
    height: "52px",
    padding: "10px",
    lineHeight: "32px",
    boxSizing: "border-box",
  },
  "& .MuiInputLabel-shrink": {
    fontSize: "1.1rem",
  },
};

export const selectStyles = {
  borderRadius: "8px",
  letterSpacing: "0.07938em",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffad36",
    borderWidth: "2px",
    borderStyle: "solid",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffad36",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ffad36",
  },
  "& .MuiSelect-select": {
    fontSize: "1rem",
    maxHeight: "56px",
    padding: "14.5px 14px",
  },
  "& .MuiSelect-icon": {
    fill: "#ffad36",
  },
  "&.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "#581d22",
    borderWidth: "2px",
  },
  "&.Mui-error .MuiSelect-select": {
    color: "#581d22",
  },
};

export const inputLabelStyles = {
  backgroundColor: "#fff",
  fontSize: "0.95rem",
  lineHeight: "1.25rem",
  "&.Mui-focused": {
    color: "#ffad36",
  },
  "&.MuiInputLabel-shrink": {
    fontSize: "1.2rem",
  },
};

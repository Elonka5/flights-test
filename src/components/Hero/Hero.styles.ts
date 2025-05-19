import type { Theme, SxProps } from "@mui/material";

export const heroSection: SxProps<Theme> = {
  position: "relative",
  minHeight: "70vh",
  width: "100%",
  paddingY: { xs: "48px", sm: "60px", md: "78px" },
  overflow: "hidden",
  backgroundImage: `url('/hero-background.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export const heroContent: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  gap: 11,
  zIndex: 2,
};

export const heroTitle: SxProps<Theme> = {
  textAlign: { xs: "center", md: "left" },
  width: { md: "620px" },
  fontFamily: "Manrope",
  fontSize: { xs: "48px", md: "60px" },
  fontWeight: "700",
  lineHeight: "66.897px;",
  letterSpacing: "-1.189px",
  mb: 2,
};

export const heroSubtitle: SxProps<Theme> = {
  display: { xs: "none", md: "flex" },
  width: { md: "490px" },
  fontSize: { xs: "12px", sm: "14px", md: "16px" },
  lineHeight: "1.5",
};

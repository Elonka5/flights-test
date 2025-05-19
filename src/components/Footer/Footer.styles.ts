import type { SxProps, Theme } from "@mui/material";


export const footerStyles: SxProps<Theme> = (theme) => ({
    backgroundColor: theme.palette.primary.main || "#424242",
    color: theme.palette.secondary.main || "#ffffff",
    py: 3,
    mt: "auto",
})
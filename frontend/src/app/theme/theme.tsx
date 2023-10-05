import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

enum Palette {
  primary = "#282d2f",
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: Palette.primary,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;

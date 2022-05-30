import { createTheme } from "@mui/material/styles";
import { Colors } from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.white,
    },
    secondary: {
      main: Colors.primary,
    },
  },
});

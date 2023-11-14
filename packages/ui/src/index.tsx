import { createTheme } from "@mui/material";
import lightThemePalette from "./light-theme-palette";
import darkThemePalette from "./dark-theme-palette";

export { default as Button, type ButtonProps } from "./button";
export { ThemeProvider } from '@mui/material';

export const lightTheme = createTheme({
  ...lightThemePalette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'green',
        }
      }
    }
  }
});

export const darkTheme = createTheme({
  ...darkThemePalette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'blue',
        }
      }
    }
  }
});
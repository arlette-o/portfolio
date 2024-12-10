import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    blue: Palette["primary"];
    green: Palette["primary"];
    olive: Palette["primary"];
    sky: Palette["primary"];
  }

  interface PaletteOptions {
    blue?: PaletteOptions["primary"];
    green?: PaletteOptions["primary"];
    olive?: PaletteOptions["primary"];
    sky?: Palette["primary"];
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    blue: true;
    green: true;
    olive: true;
    sky: true;
  }
}

export const theme = createTheme({
  palette: {
    blue: {
      main: "#121D40",
      light: "121D40",
      dark: "#121D40",
      contrastText: "#000000",
    },
    green: {
      main: "#828C51",
      light: "#828C51",
      dark: "#828C51",
      contrastText: "#000000",
    },
    olive: {
      main: "#25291C",
      light: "#25291C",
      dark: "#25291C",
      contrastText: "#000000",
    },
    sky: {
      main: "#809BB3",
      light: "#809BB3",
      dark: "#809BB3",
      contrastText: "#000000",
    },
  },
});

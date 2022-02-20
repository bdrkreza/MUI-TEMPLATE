import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
    },

    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
    //   mode: darkMode ? 'dark' : 'light',
      primary: {
        main: "#f0c00",
      },
      secondary: {
        main: "#20808",
      },
    },
  });

  
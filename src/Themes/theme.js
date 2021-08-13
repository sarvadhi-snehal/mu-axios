import { createTheme } from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import yellow from "@material-ui/core/colors/yellow";

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: blue,
    info: yellow,
    success: green,
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight : 400,
    fontWeightRegular :500,
    fontWeightBold: 900,
    fontWeightMedium:600

  },
  spacing: 4,
});

export default theme;

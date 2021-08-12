import { createMuiTheme } from "@material-ui/core";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import yellow from "@material-ui/core/colors/yellow";
import orange from "@material-ui/core/colors/orange";
const theme = createMuiTheme({
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
});

export default theme;

import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createTheme({
  palette: {
  primary: "blue",
  },
  status: {
      danger: 'orange'
  }
});

export default theme;
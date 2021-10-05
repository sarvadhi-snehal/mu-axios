import { useContext, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AuthContext from "../../store/authStore";
import Links from "./Links";
import { useHistory } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: theme.zIndex.appBar - 1,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      zIndex: theme.zIndex.drawer + 1,
      // marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    top: 58,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function ResponsiveDrawer(props) {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLogin;
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const loginHadler = () => {
    history.push("/signup");
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };
  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.flex}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap href="/">
            Review
          </Typography>
          <Badge variant="dot">
            {isLogin ? (
           
              <Button color="inherit"
              endIcon={<FaSignOutAlt/>}
              onClick={logoutHandler} >
                Log out
              </Button>
         
            ) : (
           
              <Button color="inherit"
              startIcon={<FaSignInAlt/>}
              onClick={loginHadler} />
             

            )}
          </Badge>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Links />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <Links />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;

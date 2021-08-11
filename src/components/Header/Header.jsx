import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  right: {
    float: "right",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar display="flex">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">logo</Typography>
          <Box display="flex" className={classes.title} justifyContent="flex-end">

          <IconButton
            color="inherit"
            
            >
            <Badge badgeContent={0} color="secondary">
              <Brightness4Icon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <ExitToAppIcon />
            </Badge>
          </IconButton>
          
            </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

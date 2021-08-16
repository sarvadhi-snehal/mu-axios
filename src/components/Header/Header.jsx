import React from "react";
import { makeStyles } from "@material-ui/core/styles";


import IconButton from "@material-ui/core/IconButton";

import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 10
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
    
          <Box
            display="flex"
            className={classes.title}
            justifyContent="flex-end"
          >
            <IconButton color="inherit">
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
       
  );
}

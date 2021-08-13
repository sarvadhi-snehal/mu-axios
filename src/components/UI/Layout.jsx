import React,{useState} from "react";
import {makeStyles,useTheme} from "@material-ui/core";
import Drawer from '../Drawer/Drawer'
import clsx from 'clsx';

const drawerWidth = 240;
const useStyles = makeStyles((theme)=>({
  root: {
    display: 'flex',
  },
  pages: {
    width: '100%',
    background: '#fafafa',

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

export default function Layout({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
 
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Drawer handleDrawerOpen={handleDrawerOpen } handleDrawerClose={handleDrawerClose} open={open} drawerWidth={drawerWidth} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
         {children}
      </main>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
    },
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Links() {
  const classes = useStyles();

  const links = [
    {
      href: "/",
      primary: "Home",
    },
    {
      href: "/createreview",
      primary: "Create New",
    },
  ];
  const linkContent = links.map((link) => 
    <ListItemLink href={link.href}>
      <ListItemText primary={link.primary} />
    </ListItemLink>
  );

  return (
    <List component="nav" aria-label="secondary mailbox folders">
      <Typography variant="h6" p={5}>
        Home
      </Typography>
      <Divider />
      {linkContent}
    </List>
  );
}

/** @format */

import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > * + *": {
//       marginLeft: theme.spacing(2),
//       display: "flex",
//       flexDirection: "column",
//     },
//     logo: {
//       height: 600,
//     },
//   },
// }));

function ListItemLink(props) {
  return <ListItem button component={Link} {...props} />;
}

export default function Links() {
  // const classes = useStyles();

  const links = [
    {
      href: "/",
      primary: "Home"
    },
    {
      href: "/createreview",
      primary: "Create New"
    },

    {
      href: "/profile",
      primary: "Profile"
    }
  ];
  const linkContent = links.map((link) => (
    <ListItemLink to={link.href} key={link.href}>
      <ListItemText primary={link.primary} />
    </ListItemLink>
  ));

  return (
    <List component="nav" aria-label="secondary mailbox folders">
      {linkContent}
    </List>
  );
}

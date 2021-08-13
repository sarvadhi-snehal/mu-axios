  import React from "react";
  import { makeStyles } from "@material-ui/core/styles";

  import Card from "@material-ui/core/Card";
  import CardHeader from "@material-ui/core/CardHeader";

  import CardContent from "@material-ui/core/CardContent";
  import CardActions from "@material-ui/core/CardActions";

  import Avatar from "@material-ui/core/Avatar";
  import IconButton from "@material-ui/core/IconButton";
  import Typography from "@material-ui/core/Typography";
  import { red } from "@material-ui/core/colors";
  import FavoriteIcon from "@material-ui/icons/Favorite";
  import ShareIcon from "@material-ui/icons/Share";
  import Button from "@material-ui/core/Button";
  import MoreVertIcon from "@material-ui/icons/MoreVert";
  import DeleteIcon from "@material-ui/icons/Delete";
  const useStyles = makeStyles((theme) => ({
 
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  export default function ReviewCard({
    title,
    feeling,
    id,
    deleteHandler,
    body,
  }) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    return (
      <Card className={classes.root}>
        <CardHeader
          // avatar={
          //   <Avatar aria-label="recipe" className={classes.avatar}>
          //     R
          //   </Avatar>
          // }
          action={
            <IconButton aria-label="delete" onClick={() => deleteHandler(id)}>
              <DeleteIcon />
            </IconButton>
          }
          title={title}
          subheader={feeling}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }

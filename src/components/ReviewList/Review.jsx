import { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AuthContext from "../../store/authStore";
import EditIcon from "@material-ui/icons/Edit";
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
  good: {
    border: "1px solid green",
  },
  bad: {
    border: "1px solid red",
  },
  ugly: {
    border: "1px solid yellow",
  },
  dNone: {
    display: "none",
  },
  red:{
    color: "red"
  }
}));

export default function ReviewCard({
  review,
  deleteHandler,

  editHandler,
}) {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  const authCtx = useContext(AuthContext);
  const email = authCtx.user;
  const isLogin = authCtx.isLogin;
  const [isLike,setisLike] = useState(false)
  let cardBorder =
    review.feeling === "good"
      ? classes.good
      : review.feeling === "bad"
      ? classes.bad
      : classes.ugly;
  let autModify = !isLogin ? "" : review.user !== email ? classes.dNone : "";
  const handleLike = () => {
      setisLike(!isLike)
  }
  return (
    <Grid item xs={12} sm={11} md={6} lg={4}>
      <Card className={cardBorder}>
        <CardHeader
          // avatar={
          //   <Avatar aria-label="recipe" className={classes.avatar}>
          //     R
          //   </Avatar>
          // }
          action={
            <IconButton
              aria-label="delete"
              className={autModify}
              onClick={() => deleteHandler(review.fid, review.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
          title={review.title}
          subheader={review.feeling}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {review.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites"
          className={isLike && classes.red}
          onClick={handleLike}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={autModify}
            aria-label="eidt"
            onClick={() => editHandler(review)}
          >
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

import { useState, useEffect } from "react";
import Reviewcard from "./Review";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flexView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function ReviewList() {
  const classes = useStyles();
  const [revies, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    let response = await axios.get("http://localhost:8000/reviews");
    console.log(response);
    setReviews(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteRequest = async (id) => {
    axios.delete(`http://localhost:8000/reviews/${id}`);

    const newReviews = revies.filter((review) => review.id !== id);
    setReviews(newReviews);
  };

  let content = loading ? (
    <h1>Loading...</h1>
  ) : (
    <Grid container spacing={3} className={classes.flexView}>
      {revies.map((review) => (
        <Grid item xs={12} sm={11} md={6} lg={4} key={review.id}>
          <Reviewcard
            key={review.id}
            title={review.title}
            body={review.body}
            id={review.id}
            feeling={review.feeling}
            deleteHandler={deleteRequest}
          />
        </Grid>
      ))}
    </Grid>
  );

  return <Container>{content}</Container>;
}

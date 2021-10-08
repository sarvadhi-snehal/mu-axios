/** @format */

import { useState, useEffect, useCallback } from "react";
import Reviewcard from "./Review";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { CircularProgress } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, getAllPosts, likePost } from "../../actions/posts";
const useStyles = makeStyles((theme) => ({
  flexView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function ReviewList() {
  const posts = useSelector((state) => state.posts);
  console.log("posts dsad", posts);
  const history = useHistory();
  const classes = useStyles();
  // const [revies, setReviews] = useState();
  const [id, setId] = useState();
  let reviews;

  //   // let response = await axios.get("http://localhost:8000/reviews");
  //   //let post =[] console.log(response);
  //   // setReviews(response.data);
  //   let listner = reviews.on("value", (snapshot) => {
  //     let getData = [];
  //     let data = snapshot.val();

  //     for (const property in data) {
  //       getData.push({
  //         fid: property,
  //         ...data[property]
  //       });
  //     }
  //     console.log(getData);
  //     setReviews(getData);
  //     setLoading(false);
  //   });
  //   return () => reviews.off("value", listner);
  // }, []);
  const dispatch = useDispatch();
  const deleteRequest = () => {
    // axios.delete(`http://localhost:8000/reviews/${id}`);
    // setReviews(revies.filter((review) => review.id !== id));
    // reviews.child(fid).remove();

    dispatch(deletePost(id));
    setId(null);
  };
  const editHandler = (id) => {
    history.push({
      pathname: "/createreview",
      state: id
    });
  };
  const handleLike = (id) => {
    dispatch(likePost(id));
  };
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, id]);

  return (
    <Grid container spacing={3} className={classes.flexView}>
      {!posts.length ? (
        <h1>loading</h1>
      ) : (
        // <CircularProgress />
        posts?.map((review) => (
          <Reviewcard
            key={review._id}
            review={review}
            deleteHandler={deleteRequest}
            editHandler={editHandler}
            handleLike={handleLike}
            setId={setId}
          />
        ))
      )}
    </Grid>
  );
}

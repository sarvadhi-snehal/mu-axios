import { useState, useEffect,useCallback } from "react";
import Reviewcard from "./Review";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import firebase from "../../config"
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  flexView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function ReviewList() {
  const history = useHistory();
  const classes = useStyles();
  const [revies, setReviews] = useState();
  const [loading, setLoading] = useState(true);
let reviews ;

reviews =  firebase.database().ref("reviews");


useEffect(() => {
    // reviews =  firebase.database().ref("reviews");

      // let response = await axios.get("http://localhost:8000/reviews");
      // console.log(response);
      // setReviews(response.data);  
     let listner =  reviews.on('value', (snapshot) => {
        let getData = [];   
        let data = snapshot.val();
        
        for (const property in data) {
         getData.push({ 
           fid: property ,...data[property]
         })
        }
        console.log(getData)
      setReviews(getData)
      setLoading(false);
      })
      return () => reviews.off("value", listner)
  },[]);
 
  const deleteRequest =  (fid,id) => {
    // axios.delete(`http://localhost:8000/reviews/${id}`);



    // setReviews(revies.filter((review) => review.id !== id));
    reviews.child(fid).remove();
  };
  const editHandler = (fid) =>{
     history.push({
       pathname: '/createreview',
       state : fid
     })
  }

  let content = loading ? (
    <h1>Loading...</h1>
  ) : (
    revies.length === 0 ? <h1>CreateOne</h1> :
 <Grid container spacing={3} className={classes.flexView}>
      {revies.map((review) => (
  
          <Reviewcard 
          key={review.id}
            review={review}
          
            deleteHandler={deleteRequest}
            editHandler={editHandler}
          />
     
      ))}
    </Grid>
  );

  return <Container>{content}</Container>;
}

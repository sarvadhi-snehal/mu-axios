import { useState, useEffect } from "react";
import Review from "./Review";
import axios from "axios";

export default function ReviewList() {
  const [revies, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);


  const getData = async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    setReviews(response.data);
    setLoading(false);
  };



  let content = loading ? (
    <h1>Loading...</h1>
  ) : (
    revies.map((review) => <Review name={review.title} discription={review.body} id={review.id} />)
  );

  return <>
  <button onClick={getData}>Get Data</button>
  {content}</>;
}

/** @format */

import { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import firebase from '../../config.js';

import AuthContext from "../../store/authStore";
const useStyles = makeStyles({
  card: {
    marginTop: "1rem"
  },
  form: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column"
  },
  field: {
    margin: 10,
    width: "90%"
  }
});
function Sign() {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fileHandler = (e) => {
    console.log(e.target.files[0].name);
    // sign &&  firebase.database().ref("reviews")
  };
  const [sign, setSign] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    let url = "";
    sign
      ? (url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE}`)
      : (url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE}`);
    axios
      .post(url, {
        email,
        password,
        returnSecureToken: true
      })
      .then((res) => {
        const expTime = new Date(
          new Date().getTime() + +res.data.expiresIn * 1000
        );
        authCtx.login(res.data.idToken, res.data.email, expTime.toISOString());

        setSign(true);

        history.replace("/");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.error.message);
        console.log(err.response);
        console.log(err);
      });
  };

  const swapSignButton = () => {
    setSign(!sign);
  };
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justify="center">
      <Grid xs={12} sm={11} md={6} lg={6} className={classes.card}>
        <form
          autoComplete="off"
          className={classes.form}
          onSubmit={submitHandler}
        >
          <TextField
            className={classes.field}
            label="Email"
            type="email"
            id="username"
            required
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            className={classes.field}
            label="Password"
            id="password"
            type="password"
            required
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{errorMessage && errorMessage}</p>
          {/* {sign &&   <input type="file" onChange={fileHandler}/>
          
          } */}

          <Button type="submit" variant="outlined" color="secondary">
            {sign ? "Sign up" : "sign in"}
          </Button>
        </form>
        <Button variant="contained" color="primary" onClick={swapSignButton}>
          {sign ? "Sign in" : "sign up"}
        </Button>
      </Grid>
    </Grid>
  );
}

export default Sign;

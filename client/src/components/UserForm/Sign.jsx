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
import { createUser, loginUser } from "../../actions/users";
import { useDispatch } from "react-redux";
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
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const fileHandler = (e) => {
    console.log(e.target.files[0].name);
    // sign &&  firebase.database().ref("reviews")
  };
  const [sign, setSign] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    const newuser = {
      name,
      email,
      password
    };
    const user = { email, password };
    sign
      ? dispatch(createUser(newuser, history))
      : dispatch(loginUser(user, history));
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
          {" "}
          {sign ? (
            <TextField
              className={classes.field}
              label="Name"
              type="name"
              id="name"
              required
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : null}
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

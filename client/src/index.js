import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Themes/theme";
import {StoreProvider} from "./store/authStore";
import { config } from "./config";
import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode
} from "@react-firebase/database";
ReactDOM.render(
  <React.StrictMode>
      <FirebaseDatabaseProvider firebase={firebase} {...config}>
    <StoreProvider>
     <ThemeProvider theme={theme}>
      <Router>

        <App />
      </Router>
        </ThemeProvider>  
    </StoreProvider>
    </FirebaseDatabaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
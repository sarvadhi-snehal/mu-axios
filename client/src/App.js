/** @format */

import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/authStore";

//themes
// import theme from "./Themes/theme";
// UI
import Layout from "./components/UI/Layout";
//main poages
import NoMatch from "./pages/NoMatch";
import CreateReview from "./pages/CreateReview";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

//component import
import Header from "./components/Header/Header";
import Sign from "./components/UserForm/Sign";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLogin;

  return (
    <Container maxidth="lg">
      {/* <Header /> */}
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/createreview">
            <CreateReview />
            {/* {isLogin && <CreateReview />} */}
            {/* {!isLogin && <Sign />} */}
          </Route>

          <Route path="/signup">
            <Sign />
          </Route>

          <Route path="/profile">
            <h1> hello</h1>
            {/* <Profile />
            {!isLogin && <Sign />} */}
          </Route>
          {/* 
        <Route path="*">
        <NoMatch />
      </Route>  */}
        </Switch>
      </Layout>
    </Container>
  );
}

export default App;

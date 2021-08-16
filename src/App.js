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

//store

function App() {
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLogin;
  return (
    <div className="App">
      <Header />
        <Layout>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

     
            <Route path="/createreview">
            {isLogin &&  <CreateReview />}
            {!isLogin &&  <Sign />}
            </Route>
        

         
            <Route path="/signup">
              <Sign />
            </Route>


   
            <Route path="/profile">
               {isLogin &&  <Profile />}
            {!isLogin &&  <Sign />}
        
            </Route>
{/* 
        <Route path="*">
        <NoMatch />
      </Route>  */}
      </Switch>
        </Layout>
    </div>

  );
}

export default App;

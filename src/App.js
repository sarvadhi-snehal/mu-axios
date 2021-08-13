import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

//themes
import theme from "./Themes/theme";
// UI
import Layout from "./components/UI/Layout";
//main poages
import NoMatch from "./pages/NoMatch";
import CreateReview from "./pages/CreateReview";
import Home from "./pages/Home";

//component import
import Header from "./components/Header/Header";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Layout>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/createreview">
            <CreateReview />
          </Route>
{/* 
          <Route path="*">
            <NoMatch />
          </Route> */}
        </Layout>
      </Switch>
    </ThemeProvider>
  );
}

export default App;

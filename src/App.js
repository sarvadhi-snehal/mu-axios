import "./App.css";
import { ThemeProvider } from '@material-ui/core';
import { Route, Switch } from "react-router-dom";

//themes
import theme from "./Themes/theme"

//main poages
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import CreateReview from "./pages/CreateReview";
import Home from './pages/Home'

//component import
import Header from "./components/Header/Header";
function App() {
  return (
    <ThemeProvider theme={theme} >

      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/createreview">
          <CreateReview />
        </Route>
        
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>

    </ThemeProvider>
  );
}

export default App;

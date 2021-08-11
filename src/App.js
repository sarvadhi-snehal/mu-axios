import "./App.css";

import { Route, Switch } from "react-router-dom";
//main poages
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import GenralThings from "./pages/GenralThings";
import TravelTypes from "./pages/TravelTypes";
import Travells from './pages/Travells'

//component import
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
        <Route path="/genralthings">
          <GenralThings />
        </Route>
        <Route path="/traveltypes">
          <TravelTypes />
        </Route>
        <Route path="/travells">
          <Travells />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

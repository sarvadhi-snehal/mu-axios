import "./App.css";
import { ThemeProvider } from '@material-ui/core/styles';
import { Route, Switch } from "react-router-dom";

//themes
import theme from "./Thems/theme"

//main poages
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import CreateBlog from "./pages/CreateBlog";
import Home from './pages/Home'

//component import
import Header from "./components/Header/Header";
function App() {
  return (
    <ThemeProvider value={theme} >

    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/createBlog">
          <CreateBlog />
        </Route>
        
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import Wines from "./pages/Wines";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Wine from "./pages/Wine";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/wines/:lwin">
            <Wine />
          </Route>
          <Route path="/wines">
            <Wines />
          </Route>
          <Route path="/">
            <Redirect to="/wines" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

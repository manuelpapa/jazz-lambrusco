import React from "react";
import "./App.css";
import Wines from "./pages/Wines";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/wines">
          <Wines />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

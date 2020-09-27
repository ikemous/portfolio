import React from 'react';
import HomePage from "./pages/HomePage";
import MehNavBar from "./components/MehNavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <MehNavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;

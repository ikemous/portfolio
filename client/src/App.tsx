import React from 'react';
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import MehNavBar from "./components/MehNavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <MehNavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectPage} />
      </Switch>
    </Router>
  );
};

export default App;

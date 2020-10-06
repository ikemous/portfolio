import React from 'react';
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import MehNavBar from "./components/MehNavBar";
import TestimonialsPage from './pages/TestimonialsPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <MehNavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/portfolio" component={ProjectPage} />
        <Route exact path="/testimonials" component={TestimonialsPage} />
      </Switch>
    </Router>
  );
};

export default App;

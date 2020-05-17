import React from 'react';
import './App.css';
import Home from './containters/Home'
import Signup from './sessions/Signup';
import Login from "./sessions/Login";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
      </div>
    </Router>
  );
}

export default App;

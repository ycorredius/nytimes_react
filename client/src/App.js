import React from 'react';
import './App.css';
import Signup from './sessions/Signup';
import Login from "./sessions/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/signup">
          <Signup/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
      </Router>
    </div>
  );
}

export default App;

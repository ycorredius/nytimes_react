import React from 'react';
import './App.css';
import Home from './containters/Home'
import Signup from './components/sessions/Signup';
import Login from "./components/sessions/Login";
import redux from "redux";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
    };
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login}/>
        </Router>
      </div>
    )
  };
}

export default App;

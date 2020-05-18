import React from 'react';
import './App.css';
import axios from 'axios';
import Home from './containters/Home'
import Signup from './sessions/Signup';
import Login from "./sessions/Login";
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

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }
  
  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  componentDidMount() {
    this.loginStatus()
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

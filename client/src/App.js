import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Home from './containters/Home';
import {
  signup,
  logout,
  login
} from "./actions/auth/authActions";
import Login from "./components/auth/Login";
import Signup from './components/auth/Signup';
import { fetchNYTimesBooks } from './actions/nytimes/bookactions'
import BooksContainer from './containters/NYtimes/Book_Container'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

class App extends React.Component{

  componentDidMount(){
    fetchNYTimesBooks(this.state)
  }

  render() {
    return (
      <div className="app">
        <Router>
            <div>
              <Route exact path={"/bestsellers"} 
              render={() => <BooksContainer/>} />

              <Route exact path={"/"} component={Home}/>

              <Route exact path={"/signup"} 
              render={()=> <Signup signup={signup}/>} />
            <Route exact path={"/login"} component={Login} />
            </div>
        </Router>
      </div>
    )
  };
}

export default connect(null,fetchNYTimesBooks)(App)

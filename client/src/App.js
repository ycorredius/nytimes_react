import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Routes from './components/Routes'
import {fetchNYTimesBooks} from './actions/nytimes/bookactions'
import {BrowserRouter as Router} from "react-router-dom";
import BookContainer from './containers/bookContainer'
import UserContainer from './containers/userContainer'

class App extends React.Component{

  componentDidMount(){
    fetchNYTimesBooks(this.state)
  }

  render() {
    return (
      <div className="app">
        <Router>
            <div>
             <Routes/>
             <UserContainer/>
            </div>
        </Router>
      </div>
    )
  };
}

export default connect(null,fetchNYTimesBooks)(App)

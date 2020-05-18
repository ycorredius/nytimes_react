import React from 'react';
import Login from '../sessions/Login'
import Signup from '../sessions/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>Wecome to the Simple New York Times</h1>
                <div>
                    <Link to="/login">Login</Link>
                </div>
                <br/>
                <div>
                    <Link to="/signup">Signup</Link>
                </div>
        </div>
    )
}

export default Home;
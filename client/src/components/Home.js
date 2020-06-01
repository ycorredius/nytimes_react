import {Link} from "react-router-dom";
import React from 'react';

const Home = () =>{
        return(
            <div>
                <h1>Welcome to A Simple New York Times Api</h1>
                <Link to='/signup'>Signup</Link>
                <Link to='/login'>Login</Link>
            </div>
        )
}

export default Home;
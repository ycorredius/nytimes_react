import {Link} from "react-router-dom";
import React from 'react';
import BookContainer from '../containers/bookContainer'


const Home = (props) =>{
        if (!props.logged_in){
          return(
            <div></div>
          )
        }else {
          return(
              <div>
                  <h1>New York Times Api</h1>
              </div>
          )
        }
}

export default Home;

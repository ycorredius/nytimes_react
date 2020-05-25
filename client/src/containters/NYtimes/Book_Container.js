import {Component} from 'react';
import axios from 'axios';
import apiKey from '../../actions/auth/apiKey'
import END_POINT from '../../actions/nytimes/fetchNYTimes'
import * as types from '../../actions/nytimes/bookactions'

class BookContainer extends Component{
    constructor(){
        super();
        this.state ={
            books: []
        };
    }

    fetchBestSellers = () =>{
        return axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`)
            .then(response => response.json())
            .then(resp => {
                debugger;
            })
    }

    render(){
        return(
            <div>
                <h1>Current NY Times Best Sellers</h1>
                
            </div>
        )
    }
}

export default BookContainer;
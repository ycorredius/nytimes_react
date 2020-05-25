import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {API_URL} from '../../actions/auth/api_url'

class BookContainer extends React.Component{
    constructor(){
        super();
        this.state ={
            books: []
        };
    }

    componentDidMount(){
        fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=XihJWvP2gaOgCgR3onpTKeXRp5LTVAQQ`)
            .then(response => response.json())
            .then(resp => resp.results.books)
            .then(data => {
              return this.setState({
                  books: data
              })
            })

        console.log(this.state)
    }
    

    render(){
        return(
            <div>
                <h1>Current NY Times Best Sellers</h1>
                
            </div>
        )
    }
}

export default connect(null,)(BookContainer)
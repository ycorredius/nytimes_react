import React from 'react';
import BestsellerBook from '../../components/nytimes_books/bestsellerBooks';
import { fetchNYTimesBooks} from '../../actions/nytimes/bookactions'
import { connect } from 'react-redux';

class BookContainer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            books: []
        };
    }

    

    render(){
        return(
            <div>
                <h1>Current NY Times Best Sellers</h1>
                <ul>
                    {this.state.books.map(book => <BestsellerBook book={book}/>)}
                </ul>
            </div>
        )
    }
}



export default connect(null,fetchNYTimesBooks)(BookContainer)
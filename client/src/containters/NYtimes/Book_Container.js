import React from 'react';
import BestsellerBook from '../../components/nytimes_books/bestsellerBooks';
import { fetchNYTimesBooks} from '../../actions/nytimes/bookactions'
import { connect } from 'react-redux';

class BookContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(!this.props.books){
            return(
                <div>
                    
                </div>
            )
        } else {
        return(
            <div>
                <h1>Current NY Times Best Sellers</h1>
                <ul>
                    {this.props.books.books.map(book => <BestsellerBook book={book}/>)}
                </ul>
            </div>
        )}
    }
}

const mapStateToProps = (state) => {
    return{
        books: state.bookReducer.books
    }
}


export default connect(mapStateToProps,fetchNYTimesBooks)(BookContainer)
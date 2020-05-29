import React from 'react';
import BestsellerBook from '../../components/nytimes_books/bestsellerBooks';
import BestsellerPast from '../../components/nytimes_books/bestsellerPast'
import { fetchNYTimesBooks} from '../../actions/nytimes/bookactions'
import { connect } from 'react-redux';

class BookContainer extends React.Component{

    render(){
        if(!this.props.books_past){
            return(
                <div>
                    
                </div>
            )
        } else {
        return(
            <div>
                <h1>Current NY Times Best Sellers</h1>
                <ul>
                    {this.props.books_past.map(book => <BestsellerPast book={book}/>)}
                </ul>
            </div>
        )}
    }
}

const mapStateToProps = (state) => {
    return{
        books_past: state.bookReducer.books_past
    }
}


export default connect(mapStateToProps,fetchNYTimesBooks)(BookContainer)
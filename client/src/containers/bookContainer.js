import React from 'react';
import BestsellerBook from '../components/nytimes_books/bestsellerBooks';
import BestsellerPast from '../components/nytimes_books/bestsellerPast'
import { fetchNYTimesBooks, fetchBook, fetchListCategory,fetchCurrentBestSellers} from '../actions/nytimes/bookactions'
import { connect } from 'react-redux';

class BookContainer extends React.Component{
    componentDidMount(){
        this.props.fetchCurrentBestSellers("family")
    }

    handleClick = (e) => {
        this.props.fetchBook(e.target.dataset.target)
    }

    render(){
        if(!this.props.current_bestsellers){
            return(<div></div>)
        } else {
        return(
            <div>
                <h1>Past Best Seller Books</h1>
                <ul>
                    <BestsellerBook books={this.props.current_bestsellers.books} handleClick={this.handleClick}/>
                </ul>
                <h1>Past Best Seller Books</h1>
                <ul>
                    <BestsellerPast books={this.props.books_past.data} handleClick={this.handleClick}/>
                </ul>
                
            </div>
        )}
    }
}

const mapStateToProps = (state) => {
    return{
        books_past: state.bookReducer.books_past,
        current_bestsellers: state.bookReducer.current_bestsellers
    }
}


export default connect(mapStateToProps,{fetchNYTimesBooks,fetchBook,fetchListCategory,fetchCurrentBestSellers})(BookContainer)
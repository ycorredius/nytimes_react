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
                <div class ="text-center text-5xl text-mono text-blue-700">
                    <h1>Best Seller Books</h1>
                </div>
                    <BestsellerBook books={this.props.current_bestsellers.books} handleClick={this.handleClick}/>
                <div class ="text-center text-5xl text-mono text-blue-700">
                    <h1>Past Best Seller Books</h1>
                </div>
                <ul>
                    <div class="grid grid-cols-3 ">
                        <div class="col-span-1 bg-gray-400 h-10 text-center"> Title </div>
                        <div class="col-span-1 bg-gray-400 h-10 text-center"> Author </div>
                        <div class="col-span-1 bg-gray-400 h-10 text-center"> Info</div>
                    </div>
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
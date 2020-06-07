import React from 'react';
import { fetchBook, addBestSellerToReadList} from '../../actions/nytimes/bookactions';
import {connect} from 'react-redux';

class BestsellerShow extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        this.props.fetchBook(this.props.match.params.bookId)
    }

    handleClick() {
        this.props.addBestSellerToReadList({bookId: this.props.book.data.id, id: this.props.userId})
        this.props.history.push("/dashboard")
    }

    render(){
        if (!this.props.book){
            return(
            <div></div>
        )
        }else {
            const {amazon_product_url, article_chapter_link, author, bestseller_date, contributor, description, first_chapter_link, published_date, publisher, sunday_review_link, title} = this.props.book.data.attributes
            return(
                
            <div class="container mx-auto py-20">
                <div class="container mx-auto lg:flex-1 lg:rounded lg:border border-gray-600 lg:text-center lg: p-4 bg-blue-100 ">
                    <h2>Title: {title}</h2>
                    <h3>Author: {author}</h3>
                    <p>Contributor: {contributor}</p>
                    <p>Publisher: {publisher}</p>
                </div>
                <div class="lg:flex-1 lg:rounded lg:border border-gray-600 lg:text-center lg: p-4 bg-blue-100 gap-4 p-4">
                    <article>Description: {description}</article>
                    <p>Best Seller Date: {bestseller_date} </p>
                    <p>Published Date: {published_date}</p>
                    <p>Amazon Product Url: <div class="text-blue-600"><a href={amazon_product_url} target= "_blank">{amazon_product_url}</a></div></p>
                    <p>First Chapter Link: {first_chapter_link === ""? "N/A": {first_chapter_link}}</p>
                    <p>Article Chapter Link: {article_chapter_link === ""? "N/A": {article_chapter_link}}</p>
                    <p>Sunday Review Link: {sunday_review_link === ""? "N/A": {sunday_review_link}}</p>
                </div>
                <div class="text-center">
                    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={this.handleClick}>Add Book To Read</button>
                </div>
            </div>
            )
        }
        
    }
}

    const mapStateToProps = (state) => {
        return{
            book: state.bookReducer.book,
            userId: state.authReducer.currentUser.id
        }
    }

export default connect(mapStateToProps,{fetchBook,addBestSellerToReadList})(BestsellerShow);
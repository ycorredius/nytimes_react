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
            <div>
                <h2>Title: {title}</h2>
                <h3>Author: {author}</h3>
                <p>Contributor: {contributor}</p>
                <p>Publisher: {publisher}</p>
                <br/><br/>
                <p>Description: {description}</p>
                <p>Best Seller Date: {bestseller_date} </p>
                <p>Published Date: {published_date}</p>
                <br/><br/>
                <p>Amazon Product Url: <a href={amazon_product_url} target= "_blank">{amazon_product_url}</a></p>
                <p>First Chapter Link: {first_chapter_link === ""? "N/A": {first_chapter_link}}</p>
                <p>Article Chapter Link: {article_chapter_link === ""? "N/A": {article_chapter_link}}</p>
                <p>Sunday Review Link: {sunday_review_link === ""? "N/A": {sunday_review_link}}</p>
                
                <button onClick={this.handleClick}>Add Book To Read</button>
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
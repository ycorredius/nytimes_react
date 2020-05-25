import React from 'react';

const bestsellerBook = () => {
    return (
        <div>
            <ul>
                <p>Rank: {this.props.rank}</p>
                <p>Rank Last Week: {this.props.rank_last_week}</p>
                <p>Title: {this.props.title}</p>
                <p>Author: {this.props.author}</p>
                <p>Publisher: {this.props.publisher}</p>
                <p>Description: {this.props.description}</p>
                <img src={this.props.book_image}/>
            </ul>
        </div>
    )
}

export default bestsellerBook;
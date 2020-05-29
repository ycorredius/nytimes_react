import React from 'react';

const BestsellerPast = props => {
    return (
        <div>
            <ul>
                <p>Title: {props.book.title}</p>
                <p>Author: {props.book.author}</p>
                <p>Description: {props.book.description}</p>
                <p>Contributor: {props.book.contributor}</p>
                <p>Publisher: {props.book.publisher}</p>
            </ul>
        </div>
    )
}

export default BestsellerPast;
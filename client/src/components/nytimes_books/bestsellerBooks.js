import React from 'react';
import { connect } from 'react-redux';
import BestsellerCard from './bestsellerCard'

const BestsellerBooks = (props) => {
    
    if(!props.books){
        return(
            <div></div>
        )
    }
    else{
    return (
        <div>
            {props.books.map(book => <BestsellerCard book={book} handleClick={props.handleClick}/>)}
        </div>
    )}
}

export default BestsellerBooks;
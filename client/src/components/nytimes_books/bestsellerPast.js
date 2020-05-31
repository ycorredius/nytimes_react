import React from 'react';
import { connect } from 'react-redux';
import BestsellerPastCard from './bestsellerPastCard'

const BestsellerPast = (props) => {
    if(!props.books){
        return(
            <div></div>
        )
    }
    else{
    return (
        <div>
            {props.books.map(book => <BestsellerPastCard book={book} handleClick={props.handleClick}/>)}
        </div>
    )}
}

export default BestsellerPast;
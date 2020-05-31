import React from 'react';
import {Link} from 'react-router-dom';


 const BestsellerPastCard = (props) =>{
     const {id} = props.book
     const {title,author} = props.book.attributes
    return(
    <div>
        <ul>
            <p>Title: {title}</p>
            <p>Author: {author}</p>
                <Link to={`/bestsellers/${id}`}>
                    <button data-target={id} onClick={props.handleClick}>
                        Book Info
                    </button>
                </Link>
        </ul>
    </div>
)
}
export default BestsellerPastCard;
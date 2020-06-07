import React from 'react';
import {Link} from 'react-router-dom';


 const BestsellerPastCard = (props) =>{
     const {id} = props.book
     const {title,author} = props.book.attributes
    return(
        <div class="lg:flex-1 lg:rounded lg:border border-gray-600 lg:text-center lg: p-4 bg-blue-100">
            <div class="grid grid-cols-3 gap-4">
        
                <div class="col-span-1 h-10 text-center">
                    <p>{title}</p>
                </div>
                <div class="col-span-1 h-10 text-center">
                    <p>{author}</p>
                </div>
                <div class="col-span-1 h-10 text-center">
                   <Link to={`/bestsellers/${id}`}>
                    <div class="text-center">
                        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" data-target={id} onClick={props.handleClick}>
                                Book Info
                        </button>
                    </div>
                </Link>
                </div>
            </div>
        </div>
    )
}
export default BestsellerPastCard;
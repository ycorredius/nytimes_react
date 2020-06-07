import React from 'react';

const BestsellerCard = props => {
    const divStyle = { backgroundImage: `url(`+props.book.book_image+`)`}
    return (
        <div>
            <div class="max-w-sm w-full lg:max-w-full lg:flex lg:gap-4">
                <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden object-contain h-48 w-full" style={divStyle} title="book cover"></div>
                <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                            <div class="text-gray-900 font-bold text-xl mb-2"> {props.book.title}</div>
                            <p class="text-gray-700 text-base">Rank: {props.book.rank}</p>
                            <p class="text-gray-700 text-base">Rank Last Week: {props.book.rank_last_week}</p>
                            <p class="text-gray-700 text-base">Author: {props.book.author}</p>
                            <p class="text-gray-700 text-base">Publisher: {props.book.publisher}</p>
                            <p class="text-gray-700 text-base">Description: {props.book.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestsellerCard;
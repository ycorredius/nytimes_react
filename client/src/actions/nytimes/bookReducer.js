import * as types from './bookActionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case types.LOADBOOKS:
            return{
                ...state,
                books_past: action.books_past
            }
        case types.SHOW_BEST_SELLER_BOOK:
            return{
                ...state,
                book: action.bookShow
            }
        case types.LOAD_LIST:
            return{
                ...state,
                list: action.list
            }
        case types.LOAD_CURRENT_BEST_SELLERS:
            return{
                ...state,
                current_bestsellers: action.current_bestsellers
            }
        default: 
            return state
    }
}
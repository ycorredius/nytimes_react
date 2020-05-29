import * as types from './bookActionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case types.LOADBOOKS:
            return{
                ...state,
                books_past: action.books_past
            }
        default: 
            return state
    }
}
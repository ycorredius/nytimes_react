import * as types from './bookActionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case types.LOADBOOKS:
            return{
                ...state,
                books: action.books
            }
        default: 
            return state
    }
}
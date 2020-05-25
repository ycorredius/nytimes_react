import * as types from './bookActionTypes';


initialState = 
export default (state= initialState, action) => {
    switch (action.types) {
        case types.UPDATEBOOKS:
            return {
                ...state,
                action.books
            }

    
        default:
            break;
    }
}
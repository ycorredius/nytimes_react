import axios from 'axios';
import {END_POINT} from './end_point'
import * as types from '../../actions/nytimes/bookActionTypes'

export const loadbooks = (books_past) => {
    return {
        type: types.LOADBOOKS,
        books_past: books_past
    }
}

export const showBestSellerBook = (bookShow) =>{
    return {
        type: types.SHOW_BEST_SELLER_BOOK,
        bookShow: bookShow
    }
}



export const fetchNYTimesBooks = () => {
    return dispatch => {
        return axios.get(`${END_POINT}/best_sellers`)
            .then(response => response.data)
            .then(res =>
                dispatch(loadbooks(res)))
    }
}

export const fetchBook = (bookData) => {
    return dispatch => {
            return axios.get(`${END_POINT}/best_sellers/${bookData}`)
            .then(response => response.data)
            .then(res => {dispatch(showBestSellerBook(res))})
        }
}

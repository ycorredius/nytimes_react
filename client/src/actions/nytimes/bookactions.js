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

export const loadList = (list) => {
    return {
        type: types.LOAD_LIST,
        list: list
    }
}
export const loadBestsellers = (currentBest) =>{
    return {
        type: types.LOAD_CURRENT_BEST_SELLERS,
        current_bestsellers: currentBest
    }
}

export const updateReadList = (readList) => {
    return{
        type: types.UPDATE_READ_LIST,
        readList: readList
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
export const fetchListCategory = () =>{
    return dispatch => {
        return axios.get(`${END_POINT}/bestsellers_list`)
        .then(response=> response.data)
        .then(({data}) => dispatch(loadList(data)))
    }
}


export const fetchCurrentBestSellers = () => {
    return dispatch => {
        return axios.get (`https://api.nytimes.com/svc/books/v3/lists/current/family.json?api-key=XihJWvP2gaOgCgR3onpTKeXRp5LTVAQQ`)
            .then(response => response.data)
            .then(({results}) => dispatch(loadBestsellers(results)))
    }
}


export const addBestSellerToReadList = (user) => {
    return dispatch => {
        axios.put(`${END_POINT}/users/${user.id}`,{user},{withCredentials:true})
        .then(response => response.data)
        .then(res => dispatch(updateReadList(res)))
    }
}

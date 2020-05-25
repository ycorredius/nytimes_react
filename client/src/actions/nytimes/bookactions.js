import React from 'react';
import axios from 'axios';
import {END_POINT} from './end_point'
import {API_URL} from '../auth/api_url'
import * as types from '../../actions/nytimes/bookActionTypes'

export const updatebooks = (books) => {
    return {
        type: types.UPDATEBOOKS,
        books: books
    }
}

export const fetchNYTimesBooks = () => {
    return dispatch =>{
        return axios.get(`${END_POINT}/books/v3/lists.json?${API_URL}`)
            .then(respone => respone.json())
            .then(resp => {
                debugger;
            })
    }
}

export const searchBookList = (bookSearch) => {
    return dispatch => {
        return axios.get(`${END_POINT}books/lists/${bookSearch.bestsellersDate}/${bookSearch.list}.json?${API_URL}`)
        .then(response => response.json())
        .then(resp => {
            debugger
        })
    }
}

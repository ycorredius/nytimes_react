import React from 'react';
import axios from 'axios';
import END_POINT from './fetchNYTimes'
import apiKey from '../auth/apiKey'


export const fetchNYTimesBooks = () => {
    return dispatch =>{
        return axios.get(`${END_POINT}/books/v3/lists.json?${apiKey}`)
            .then(respone => respone.json())
            .then(resp => {
                debugger``
            })
    }
}

export const searchBookList = (bookSearch) => {
    const newBookSearch = bookSearch
    return axios.get(`${END_POINT}books/lists/${bestsellersDate}/${list}.json?${apiKey}`)
        .then(response => response.json())
        .then(resp => {
            debugger
        })
}
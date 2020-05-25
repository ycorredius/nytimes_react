import React from 'react';
import axios from 'axios';
import END_POINT from '../../containters/fetchNYTimes'
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
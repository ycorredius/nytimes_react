import axios from 'axios';
import {END_POINT} from './end_point'
import {API_URL} from '../auth/api_url'
import * as types from '../../actions/nytimes/bookActionTypes'

export const loadbooks = (books_past) => {
    return {    
        type: types.LOADBOOKS,
        books_past: books_past
    }
}

export const fetchNYTimesBooks = () => {
    return dispatch => {
        return axios.get(`${END_POINT}/bestsellers_pasts`)
            .then(response => response.data)
            .then(res =>
                dispatch(loadbooks(res)))
    }
}


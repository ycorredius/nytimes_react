import axios from 'axios';
import {END_POINT} from './end_point'
import {API_URL} from '../auth/api_url'
import * as types from '../../actions/nytimes/bookActionTypes'

export const loadbooks = (books) => {
    return {    
        type: types.LOADBOOKS,
        books: books
    }
}

export const fetchNYTimesBooks = () => {
    return dispatch => {
        return axios.get(`${END_POINT}/books/v3/lists/current/hardcover-fiction.json?api-key=${API_URL}`)
            .then(response => response.data.results)
            .then(res =>
                dispatch(loadbooks(res)))
    }
}


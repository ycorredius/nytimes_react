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

export const fetchNYTimesBooks = (books) => {
    return dispatch => {
        return axios.get(`${END_POINT}/books/v3/lists/best-sellers/history.json?api-key=${API_URL}`)
            .then(response => response)
            .then(resp => {
                debugger;
            })
    }
    // fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=XihJWvP2gaOgCgR3onpTKeXRp5LTVAQQ`)
    //     .then(response => response.json())
    //     .then(resp => resp.results.books)
    //     .then(data => {
    //         return this.setState({
    //             books: data
    //         })
    //     })

    // console.log(this.state)
}


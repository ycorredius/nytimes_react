import * as types from './actionTypes';
import axios from 'axios';

const API_URL = "http://localhost:3001"

export const authRequest = () => {
    return {
      type: types.AUTHENTICATION_REQUEST
    }
  }

export const authSuccess = (user, token) => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    user: user,
    token: token
  }
}

const authFailure = (errors) => {
  return {
    type: types.AUTHENTICATION_FAILURE,
    errors: errors
  }
}

export const signup = (user) => {
  const newUser = user
  return dispatch => {
    return axios.post(`http://localhost:3001/users`,{user},{withCredentials:true})
    // return fetch(`http://localhost:3001/users`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    //   },
    //   body: JSON.stringify(newUser),
    //   credentials: "include"
    // })
      .then((response) => {
        debugger;
        response.json();
      })
      .then((resp) => {
        dispatch(
          authenticate({
            email: newUser.email,
            password: newUser.password,
            password_confirmation: newUser.password_confirmation,
          })
        );
      })
      .catch((errors) => {
        dispatch(authFailure(errors));
      });
  };
}

export const authenticate = (credentials) => {
  return dispatch => {
    dispatch(authRequest())
    return fetch(`${API_URL}/user_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({auth: credentials})
    })
      .then(res => res.json())
      .then((response) => {
          debugger;
          const token = response.jwt;
          localStorage.setItem('token', token);
          return getUser(credentials)
      })
      .then((user) => {
        console.log(user)
          dispatch(authSuccess(user, localStorage.token))
      })
      .catch((errors) => {
          dispatch(authFailure(errors))
          localStorage.clear()
      })
  }
}

export const getUser = (credentials) => {
  const request = new Request(`${API_URL}/find_user`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`,
    }),
    body: JSON.stringify({user: credentials})
  })
  return fetch(request)
    .then(response => response.json())
    .then(userJson => {return userJson})
    .catch(error => {
      return error;
    });
}

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    return dispatch({
      type: types.LOGOUT
    });
  }
}
import * as types from '../actions/actionTypes';

	const initialState = {
	  isAuthenticated: false,
	  isAuthenticating: false,
	  currentUser: {},
	  token: null,
	  errors: []
	}

	export default (state = initialState, action) => {
  switch(action.type) {
  	case types.AUTHENTICATION_REQUEST:
  		return{
  			...state, 
  			isAuthenticating: true
  		}
   	case types.AUTHENTICATION_SUCCESS:
   		return{
   			...start, 
   			isAuthenticated: true,
   			isAUthenticating: false,
   			currentUser: action.user,
   			token: action.token
   		}
   	case types.AUTHENTICATION_FAILURE:
   		return{
   			isAuthenticated: false,
   			isAUthenticating: false,
   			currentUser: {},
   			token: null,
   			errors: action.errors || []
   		}
   	case types.logout:
   		return{
   			..state,
   			isAuthenticated: false,
   			isAUthenticating: false,
   			currentUser: {},
   			token: null
   		}
}
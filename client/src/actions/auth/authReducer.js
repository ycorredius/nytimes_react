import * as types from './actionTypes';

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
     			...state,
     			isAuthenticated: true,
     			isAUthenticating: false,
     			currentUser: action.user,
     			token: action.token
     		}
     	case types.AUTHENTICATION_FAILURE:
     		return{
          ...state,
     			isAuthenticated: false,
     			isAUthenticating: false,
     			currentUser: {},
     			token: null,
     			errors: action.errors || []
     		}
     	case types.LOGOUT:
     		return{
     			...state,
     			isAuthenticated: false,
     			isAUthenticating: false,
     			currentUser: {},
     			token: null
     		}
      default: 
        return state
    }
}
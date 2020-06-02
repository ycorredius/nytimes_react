import * as types from './actionTypes';

	const initialState = {
	  logged_in: false,
	  currentUser: {},
	  errors: []
	}

	export default (state = initialState, action) => {
    switch(action.type) {
     	case types.AUTHENTICATION_SUCCESS:
     		return{
     			...state,
     			logged_in: action.logged_in,
     			currentUser: action.user
     		}
     	case types.AUTHENTICATION_FAILURE:
     		return{
          ...state,
     			logged_in: action.logged_in,
     			currentUser: {},
     			errors: action.errors || []
     		}
        case types.AUTHENTICATION_SESSION_STATUS:
            return{
                    ...state,
                logged_in: action.logged_in,
                currentUser: action.user
            }
     	case types.LOGOUT:
     		return{
     			...state,
     			logged_in: false,
     			currentUser: {}
     		}
      default: 
        return state
    }
}
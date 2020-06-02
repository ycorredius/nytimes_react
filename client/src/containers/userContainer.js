import React from 'react';
import Dashboard from '../components/Dashboard'
import {connect} from 'react-redux';
import {sessionStatus} from '../actions/auth/authActions'


class UserContainer extends React.Component {
	componentDidMount(){
		this.props.sessionStatus()
	}

	render(){
		return(
			<Dashboard />
		)
	}

}

const mapStateToProps = ({authReducer}) => {
	return {
		user: authReducer.currentUser,
		logged_in: authReducer.logged_in
	}
}

export default connect(mapStateToProps,{sessionStatus})(UserContainer);
import React from 'react';
import Dashboard from '../components/Dashboard'
import {connect} from 'react-redux';
import {sessionStatus,logout} from '../actions/auth/authActions'
import NavBar from '../components/navbar'



class UserContainer extends React.Component {
	componentDidMount(){
		this.props.sessionStatus()
	}

	handleLogout = () => {
		this.props.logout()
	  }

	render(){
		return(
			<div>
				<NavBar logged_in={this.props.logged_in} user={this.props.user} handleLogout={this.handleLogout	}/>
			</div>
		)
	}

}

const mapStateToProps = ({authReducer}) => {
	return {
		user: authReducer.currentUser,
		logged_in: authReducer.logged_in
	}
}

export default connect(mapStateToProps,{sessionStatus,logout})(UserContainer);
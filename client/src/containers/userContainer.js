import React from 'react';
import Dashboard from '../components/Dashboard'
import {connect} from 'react-redux';
import {sessionStatus} from '../actions/auth/authActions'
import NavBar from '../components/navbar'
import Home from '../components/Home'

class UserContainer extends React.Component {
	componentDidMount(){
		this.props.sessionStatus()
	}

	render(){
		return(
			<div>
				<NavBar/>
				<Home logged_in={this.props.logged_in} user={this.props.user}/>
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

export default connect(mapStateToProps,{sessionStatus})(UserContainer);

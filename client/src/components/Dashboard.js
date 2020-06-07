import React from 'react';
import {connect} from 'react-redux';
import {sessionStatus} from '../actions/auth/authActions'
import NavBar from './navbar';
import BookContainer from '../containers/bookContainer';
import BestsellerPast from '../components/nytimes_books/bestsellerPast'

class Dashboard extends React.Component{
	componentDidMount(){
		this.props.sessionStatus()
	}
	render(){
		if(!this.props.readList){
			return (
			<div>
					
			</div>
		)}else{
			return (
				<div>
					<div class="container mx-auto text-center my-20">
					<div class ="text-center text-5xl text-mono text-blue-700">
                    	<h1> {this.props.user.data.attributes.firstName}'s Read List</h1>
                	</div>
					<ul>
						<BestsellerPast books={this.props.readList}/>
					</ul>
					</div>
				</div>
			)
		}
	}
}
const mapStateToProps = ({authReducer}) =>{
	return{
		user: authReducer.currentUser,
		readList: authReducer.currentUser.included
	}
}

export default connect(mapStateToProps,{sessionStatus})(Dashboard);

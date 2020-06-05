import React from 'react';
import {connect} from 'react-redux';
import NavBar from './navbar';
import BookContainer from '../containers/bookContainer';
import BestsellerPast from '../components/nytimes_books/bestsellerPast'

class Dashboard extends React.Component{
	render(){
		if(!this.props.readList){
			return (
			<div>
					
			</div>
		)}else{
			return (
				<div>
					<h1> {this.props.user.data.attributes.firstName}'s Read List</h1>	
					<ul>
						<BestsellerPast books={this.props.readList}/>
					</ul>
				</div>
			)}
		}
}
const mapStateToProps = ({authReducer}) =>{
	debugger
	return{
		user: authReducer.currentUser,
		readList: authReducer.currentUser.included
	}
}

export default connect(mapStateToProps)(Dashboard);

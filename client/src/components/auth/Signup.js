import React from 'react';
import { connect } from 'react-redux';
import {signup} from '../../actions/auth/authActions'

class Signup extends React.Component{
  constructor(props){
	super(props);

	this.state ={
	  firstName: '',
	  lastName: '',
	  email: '',
	  password: '',
	  password_confirmation: '',
	  signUpErrors: ""
	}
	
  }

  handleOnChange = (event) => {
	const {name,value} =  event.target
	this.setState({
	  [name]: value
	})
  }

  handleOnSubmit = (e) => {
	e.preventDefault();
	this.props.signup(this.state)
	  .then(() => {
		this.props.history.push("/")})
  }

  
  render(){
	const {firstName,lastName,email,password,password_confirmation} = this.state
	return(
	  <div class="container mx:auto px-64">
		<div class="w-full max-w-xs">
			<div class="text-4xl text-blue-700 text-center">
		  		<h1 >Signup Here!</h1>
		  	</div>
		  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleOnSubmit}>
			<div class="mb-4">
			  <label class="block text-gray-700 text-sm font-bold mb-2">First Name: </label>
			  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"type="text"
			  name="firstName"
			  value={firstName}
			  onChange={this.handleOnChange}/>
			</div>
			<br/>
			<div class="mb-4">
			  <label class="block text-gray-700 text-sm font-bold mb-2">Last Name: </label>
			  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" 
			  name="lastName"
			  value={lastName}
			  onChange={this.handleOnChange}
			  />
			</div>
			<br/>
			<div class="mb-4">
			  <label class="block text-gray-700 text-sm font-bold mb-2">Email: </label>
			  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"
			  name="email"
			  value={email}
			  onChange={this.handleOnChange}
			  />
			</div>
			<br/>
			<div class="mb-4">
			  <label class="block text-gray-700 text-sm font-bold mb-2">Password: </label>
			  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password"
			  name="password"
			  value={password}
			  onChange={this.handleOnChange}/>
			</div>
			<br/>
			<div class="mb-4">
			  <label class="block text-gray-700 text-sm font-bold mb-2">Password Confirmation: </label>
			  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password"
			  name="password_confirmation"
			  value={password_confirmation}
			  onChange={this.handleOnChange} />
			</div>
			<br/>
			<div>
			<input class="text-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type="submit"
					value="Signup"/>
			</div>
		  </form>
		  </div>
		</div>
	)}
}

export default connect(null,{signup})(Signup)
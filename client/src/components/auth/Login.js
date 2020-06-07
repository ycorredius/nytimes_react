import React from 'react';
import {connect} from 'react-redux'
import {authenticate} from '../../actions/auth/authActions'
import ErrorCard from './errorCard'

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      errors:''
    }
  }

  handleOnChange = (event) => {
    const {name,value} =  event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.authenticate(this.state)
      .then(res =>{
        if(res.logged_in){
          this.props.history.push("/dashboard")
        } else{
          alert(res.errors)
          this.props.history.push("/bestsellers")
        }
      })
      
  }

  render(){
    const {email,password} = this.state
    
    return(
		<div class="container mx:auto px-64">
			<div class="w-full max-w-xs">
			<div class="text-4xl text-blue-700 text-center">
				<h1>Login Here!</h1>	
		  	</div>
				<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit}>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" >
					Email: 
					</label>
					<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" 
					value={email}
					name="email"
					placeholder="email"
					onChange={this.handleOnChange}
					/>
					
				</div>
				<br/>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2">Password: </label>
					<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password"
					name="password"
					placeholder="password"
					value={password}
					onChange={this.handleOnChange}/>
				</div>
				<br/>
					<input class="text-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type="submit"
					value="Login"/>
				</form>
			</div>
		</div>
    )
  }
}
 export default connect(null,{authenticate})(Login);
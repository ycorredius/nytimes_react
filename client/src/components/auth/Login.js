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
      <div>
        <h1>Login Here!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label >Email: </label>
            <input type="text" 
            value={email}
            name="email"
            placeholder="email"
            onChange={this.handleOnChange}
            />
            
          </div>
          <br/>
          <div>
            <label>Password: </label>
            <input type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleOnChange}/>
          </div>
          <br/>
            <input type="submit"
            value="Login"/>
        </form>
      </div>
    )
  }
}
 export default connect(null,{authenticate})(Login);
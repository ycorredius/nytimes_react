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
    console.log(name,value)
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state)
    // if (this.props.signup(this.state)) {
    //   window.alert("Thank you for signing up.")
    // } else {
    //   window.alert("We're having issues creating your account.")
    // }
  }

  
  render(){
    const {firstName,lastName,email,password,password_confirmation} = this.state
    return(
      <div>
        <h1>Signup Here!</h1>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label>First Name: </label>
            <input type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleOnChange}/>
          </div>
          <br/>
          <div>
            <label>Last Name: </label>
            <input type="text" 
            name="lastName"
            value={lastName}
            onChange={this.handleOnChange}
            />
          </div>
          <br/>
          <div>
            <label>Email: </label>
            <input type="text"
            name="email"
            value={email}
            onChange={this.handleOnChange}
            />
          </div>
          <br/>
          <div>
            <label>Password: </label>
            <input type="password"
            name="password"
            value={password}
            onChange={this.handleOnChange}/>
          </div>
          <br/>
          <div>
            <label>Password Confirmation: </label>
            <input type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleOnChange} />
          </div>
          <br/>
          <div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    )}
}

export default connect(null,{signup})(Signup)
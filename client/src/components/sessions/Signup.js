import React from 'react';

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  handleOnChange = (event) => {
    const {name,value} =  event.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
  }
  
  render(){
    return(
      <div>
        <h1>Signup Here!</h1>
        <form>
          <div>
            <label for="firstName">First Name: </label>
            <input type="text" 
            onChange={this.handleOnChange}/>
          </div>
          <br/>
          <div>
            <label for="lastName">Last Name: </label>
            <input type="text" 
            onChange={this.handleOnChange}
            />
          </div>
          <br/>
          <div>
            <label for="email">Email: </label>
            <input type="text" 
            onChange={this.handleOnChange}
            />
          </div>
          <br/>
          <div>
            <label>Password: </label>
            <input type="password"
            onChange={this.handleOnChange}/>
          </div>
          <br/>
          <div>
            <label>Password Confirmation: </label>
            <input type="password" 
            onChange={this.handleOnChange} />
          </div>
          <br/>
          <div>
            <input type="submit" 
            value="Signup"
            onSubmit={this.handleOnSubmit}/>
          </div>
        </form>
      </div>
    )}
}

export default Signup;
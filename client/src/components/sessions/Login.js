import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName:'',
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

  handleOnSubmit = (event) => {
    event.preventDefault();
  }

  render(){
    const {email,password} = this.state

    return(
      <div>
      <h1>Login Here!</h1>
        <div>
          <label for="email">Email: </label>
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
          value="Login"
          />
      </div>
    )
  }
}
 export default Login;
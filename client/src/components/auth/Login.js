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
    debugger;
    const {name,value} =  event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    if (this.props.authenticate(this.state)) {
      this.props.history.push('/user_profile')
      window.alert("You're Logged In!")
    } else {
      window.alert("Sorry, something went wrong. Please try logging in again.")
    }
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
 export default Login;
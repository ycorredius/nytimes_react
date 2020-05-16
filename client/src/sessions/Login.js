import React from 'react';

const Login = () => {
    return(
        <div>
        <h1>Login Here!</h1>
          <div>
            <label for="email">Email: </label>
            <input type="text"/>
          </div>
          <br/>
          <div>
            <label>Password: </label>
            <input type="password"/>
          </div>
          <br/>
           <input type="submit"/>
        </div>
    )
 }

 export default Login;
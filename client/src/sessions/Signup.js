import React from 'react';

const Signup = () =>{
  return(
    <div>
      <h1>Signup Here!</h1>
      <form>
        <div>
          <label for="firstName">First Name: </label>
          <input type="text" />
        </div>
        <br/>
        <div>
          <label for="lastName">Last Name: </label>
          <input type="text" />
        </div>
        <br/>
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
        <div>
          <label>Password Confirmation: </label>
          <input type="password"/>
        </div>
        <br/>
        <div>
          <input type="submit"/>
        </div>
      </form>
    </div>
  )
}

export default Signup;
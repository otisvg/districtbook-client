// const { ReactComponent } = require("*.svg");
import React, { Component } from 'react'
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel'

class UserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const {username, email, password } = this.state

    return (
      <div>
        <form onSubmit={this.submitHandler}>
        <div>
          <label for="username">Username</label>
          <br/>
          <input type= "text" name="username" value= {username} onChange = {this.changeHandler}  />
          </div>
          <div>
          <label for="email">Email</label>
          <br/>
          <input type= "email" name="email" value= {email} onChange = {this.changeHandler}/>
          </div>
          <div>
          <label for="password">Password</label>
          <br/>
          <input type= "password" name="password" value= {password} onChange = {this.changeHandler} />
          </div>
          <div>
          <label for="passwordConfirmation">Password Confirmation</label>
          <br/>
          <input type= "password" name="passwordConfirmation" value= {password} onChange = {this.changeHandler} />
          </div>
          <button type="submit">Sign up</button>
       </form>
       </div>
    )
  }
}

export default UserForm;

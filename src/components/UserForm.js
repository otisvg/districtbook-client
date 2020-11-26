// const { ReactComponent } = require("*.svg");
import React, { Component } from 'react'
// import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel'
import axios from 'axios';

class UserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: ''
    }
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3000/api/v1/usersc', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    const {email, username,  password, passwordConfirmation} = this.state

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
          <input type= "password" name="passwordConfirmation" value= {passwordConfirmation} onChange = {this.changeHandler} />
          </div>
          <button type="submit">Sign up</button>
       </form>
       </div>
    )
  }
}

export default UserForm;

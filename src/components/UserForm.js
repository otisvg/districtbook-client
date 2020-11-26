// const { ReactComponent } = require("*.svg");
import React, { Component } from 'react'

class UserForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: '',
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
    const { userId, username, email, password } = this.state

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type= "integer" name="userId" value= {userId} onChange = {this.changeHandler} />
          <input type= "text" name="username" value= {username} onChange = {this.changeHandler}  />
          <input type= "email" name="email" value= {email} onChange = {this.changeHandler}/>
          <input type= "password" name="password" value= {password} onChange = {this.changeHandler} />
          <button type="submit">Submit</button>
       </form>
       </div>
    )
  }
}

export default UserForm;

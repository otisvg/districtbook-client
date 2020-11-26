import React from 'react'
import Nav from 'react-bootstrap/Nav';

// const { Component } = require("react");

function NavBar() {
  return (
    <Nav className="Navbar" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
    <Nav.Item>
      <Nav.Link to="/users/sign_up">Register</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link to="/users/sign_in">Sign In</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link to="/users/sign_out">Sign Out</Nav.Link>
    </Nav.Item>
  </Nav>
  )
}

export default NavBar;
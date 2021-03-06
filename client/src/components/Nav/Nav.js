import React from "react";
import { NavLink} from "react-router-dom";
import { Navbar, Nav, Form} from "react-bootstrap";
import Time from '../CurrTime/CurrTimePage'

const Navigation = () => {
  return (
    <>
      <Navbar bg="primary" variant="light">
        <Navbar.Brand href="#home">HPI</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/new">New Visit</NavLink>
        </Nav>
        <Form inline className="time">
          <Time/>
        </Form>
      </Navbar>
    </>
  )
}

export default Navigation;
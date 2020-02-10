import React from "react";
import {Link, NavLink} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
class App extends React.Component {
    render() {
        return (
            <div className="App container">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavItem className="smallMargin"><Link to="/catalogue">Catálogo</Link></NavItem>
                            <NavItem className="smallMargin"><Link to="/signup">Signup</Link></NavItem>
                            <NavItem className="smallMargin"><Link to="/login">Login</Link></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Routes/>
            </div>
        )
    }
}

export default App;

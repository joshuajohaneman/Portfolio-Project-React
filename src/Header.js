import React from 'react';
import { Container, Row, Col, Navbar, Collapse, NavbarBrand, NavbarToggler, NavItem, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
class HeaderComp extends React.Component { 
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar expand="sm" sticky="top" className="navbar-mushy">
                <Container>
                <NavbarBrand className="logo">
                    Mushy 🍄 Love
                </NavbarBrand>
                <Button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#nucampNavbar">
                    <span className="navbar-toggler-icon"> </span>
                </Button>
                <div className="collapse navbar-collapse" id="nucampNavbar">
                    <Navbar className="navbar-nav ml-md-auto">
                        <NavItem><NavLink className="nav-link" to="/"><i className="fa fa-home"> </i> Home</NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/index"><i className="fa fa-address-card"> </i> Index</NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/key"><i className="fa fa-key"> </i> Key</NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/spores"><i className="fa fa-money"> </i> Spores</NavLink></NavItem>
                    </Navbar>
                    </div>
                </Container>
                </Navbar>
        );
    }
}

export default HeaderComp;
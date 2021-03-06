import React, { useState } from 'react';
import { Container, Nav, Navbar, Collapse, NavbarBrand, NavbarToggler, NavItem, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
function HeaderComp(props) {
    
    const [collapsed, setCollapsed] = useState(false);
    const toggleNavbar = () => setCollapsed(!collapsed);
 
    return (
            <Navbar color="light" expand="sm" light sticky="top" className="navbar-mushy">
                <Container>
                <NavbarBrand className="logo">
                    Mushy 🍄 Love
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} classname="mr-auto" />
                <Collapse isOpen={collapsed} navbar>
                    <Nav className="navbar-nav ml-md-auto" navbar>
                        <NavItem><NavLink className="nav-link" to="/"><i className="fa fa-home"> </i> Home</NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/index"><i className="fa fa-address-card"> </i> Index</NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/key"><i className="fa fa-key"> </i> Key</NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/spores"><i className="fa fa-money"> </i> Spores</NavLink></NavItem>
                        <NavItem><NavLink className="nav-link" to="/contactus"><i className="fa fa-envelope"> </i> Contact Us</NavLink></NavItem>
                        <span className="ml-3 fa"><Button><i className="fa fa-shopping-cart"></i><span className="ml-3">{props.cartItems}</span></Button></span>
                        
                      </Nav>
                    </Collapse>
                </Container>
                </Navbar>
    );
    
}

export default HeaderComp;
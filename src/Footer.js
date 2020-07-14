import React from 'react';
import { Container, Row, Col, Navbar, Collapse, NavbarBrand, NavbarToggler, NavItem, NavLink, Button } from 'reactstrap';

class FooterComp extends React.Component { 
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="site-footer">
            <Container>
              <Row className="mb-3">
                <Col xs="6" className="text-center mx-auto">
                  <h5>Connect</h5>
                  <a className="btn btn-social-icon btn-instagram btn-lg" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                  <a className="btn btn-social-icon btn-facebook btn-lg" href="http://facebook.com/"><i className="fa fa-facebook-square" /></a>{' '}
                  <a className="btn btn-social-icon btn-twitter btn-lg" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                  <a className="btn btn-social-icon btn-google btn-lg" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                </Col>
              </Row>
            </Container>
          </footer>
        );
    }
}

export default FooterComp;
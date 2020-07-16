import React from 'react';
import { Card, CardHeader, CardImg, CardText, CardTitle, CardBody, Container, Row, Col, Jumbotron, Navbar, Collapse, NavbarBrand, NavbarToggler, NavItem, NavLink, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";

function MushroomComp(props) {
        const mushroom = props.mushrooms.filter(mushroom => mushroom.id == props.match.params.id)[0];
        /*let history = useHistory();
        history.push('/');*/
        if (mushroom) return (
            <Jumbotron>
            <Container>
            <Row className="row-content">
                <Col>
                <Card className="mushCard mx-auto">
                <CardImg variant="top" className="img-thumbnail" src={require(`${mushroom.image}`)} alt="Card image cap" />
                                <CardHeader className="card-attr">
                                    {mushroom.imageAttr}                
                                </CardHeader> 
                                <CardBody>
                                    <CardTitle className="text-center">{mushroom.genus} {mushroom.specific}<br /> {mushroom.common}</CardTitle>
                                    <CardText>
                                        {mushroom.description} 
                                    </CardText>
                             </CardBody>
                       </Card>       
                </Col>
                </Row>
            </Container>
        </Jumbotron>
        );

        else return <div className="text-center my-5"><img src={require('./images/thankyou.png')} /></div>;
}

export default MushroomComp;

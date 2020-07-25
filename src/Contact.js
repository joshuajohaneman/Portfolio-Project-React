
import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';

const handleValidSubmit = (event, values) => {
    alert(JSON.stringify(values));
}
function ContactComp(props) {
        return (
        <Jumbotron>
          <Container>
            <Row>
              <Col xs="6" className="mx-auto">
                
                <AvForm onValidSubmit={handleValidSubmit}>
    
                    <legend>Contact Us</legend>
                    <AvGroup>
                        <Col>
                            
                            <AvField id="name" name="name" type="text" minimum="5" placeholder="Your Name" className="form-control input-md" required validate={{ 
                                minLength: {value: 6}
                            }}/>

                        </Col>
                    </AvGroup>
          
                    <AvGroup>
                        <Col>
                            <AvField id="email" name="email" type="email" placeholder="email@email.com" className="form-control input-md" required />
                        </Col>
                    </AvGroup>
                    <AvGroup>
                        <Col>                     
                            <AvField type="textarea" className="form-control" id="comments" name="comments" defaultValue={"Enter a Comment"} />
                        </Col>
                    </AvGroup>
                    <AvGroup>
          
                        <Col>
                            <Button color="success" id="submit" name="submit" className="">Send</Button>
                        </Col>
            
                    </AvGroup>
                </AvForm>      
            </Col>
        </Row>
            
    </Container>
</Jumbotron>
        );
}
export default ContactComp;
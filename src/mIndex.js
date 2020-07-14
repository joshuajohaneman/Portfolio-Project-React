import React from 'react';
import { Header, Jumbotron, Container, Row, Col } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

function generateShroom(mushroom) {

    return (  
            <tr>
                <td>
                    <h5 className><Link to={`/mushroom/${mushroom.id}`}>{mushroom.genus} {mushroom.specific}</Link></h5></td>
                    <td className="text-right">
                        <h5>{mushroom.common}</h5>
                    </td>
            </tr>
    
    );
}

function IndexComp(props) {

        const shrooms = props.map(shroom => generateShroom(shroom));
        return (
                <Jumbotron>
                  <Container>
                    <Row className="row-content">
                      <Col xs="12">
                        <p>A listing of mushrooms by their scientific name, organized alphabetically. Clicking on one will bring you to it's page
                          with more information on the mushroom. If you're trying to identify a mushroom, the <a href="key.html">key</a> might be more
                          useful instead.</p>
                      </Col>
                      <Col xs="12" className="mx-auto" id="mushindex">
                        <table className="table transtable">
                          <thead className="thead-light">
                            <tr>
                              <th></th>
                              <th className="text-right">Common Name</th>
                            </tr>
                          </thead>
                            {shrooms}
                         </table>
                      </Col>
                    </Row>
                  </Container>
                </Jumbotron>
              
        );
}

export default IndexComp;

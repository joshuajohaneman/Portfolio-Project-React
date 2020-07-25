import React from 'react';
import { Button, Jumbotron, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const renderShrooms = (shrooms) => {
    let rows = [];
    for (let i = 0; i < shrooms.length; i++) {
        rows.push(<tr><td><Link to={'/mushroom/' + shrooms[i].id}>{shrooms[i].genus + " " + shrooms[i].specific}</Link></td><td className="text-right">{shrooms[i].common}</td></tr>);
    }
    console.log(rows);
    return (<tbody>{rows}</tbody>);
}

const KeyCompId = (props)  => {
    console.log(props);
    const shrooms = renderShrooms(props.mushrooms.filter((mushroom) => (mushroom.features.includes(parseInt(props.match.params.id)))));
        return (
        
        <Jumbotron>
          <Container>
            <Row className="mx-auto text-center mb-3">
                <Col>
                <Button className="" onClick={props.history.goBack}>Go Back</Button>
                </Col>
            </Row>
            <Row className="">
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

export default KeyCompId;
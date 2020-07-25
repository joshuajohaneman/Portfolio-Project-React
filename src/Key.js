import React from 'react';
import {Container, Row, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';


const FeatureLink = (feature) => {
    return (
        <Link to={'/key/' + feature[0]}>
            {feature[1]}
        </Link>
    );
}

const FeatureList = (features) => {
    let rows = [];
    for (let i = 0; i < features.length; i++) {
        rows.push(<tr><td>{FeatureLink(features[i])}</td></tr>)
    }
    return (
        <tbody>{rows}</tbody>
    );
}

const KeyComp = (props) => {
    console.log(props);
    return (
  <Jumbotron>
    <Container>
    <Row className="row-content">
      A key to edible mushrooms, useful in identification. Simply look for a
      feature of the mushroom you're trying to identify.{" "}
      <p className="text-danger">
        Disclaimer: Extremely incomplete, any mushrooms found should not be
        eaten until one has consulted with a mycologist.
      </p>
    </Row>
    <Row>
      <table className="table transtable">
        <thead className="thead-light">
          <tr>
            <th>Feature</th>
          </tr>
          {FeatureList(props.features)}
        </thead>
        
      </table>
    </Row>
    </Container>
  </Jumbotron>

    );
}

export default KeyComp;
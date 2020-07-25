import React from 'react';
import {Card, CardHeader, CardBody, CardText, CardFooter, CardImg, Row, Col, Button, Jumbotron, Container} from 'reactstrap';

const RenderSpore = (spore, props) => {
    return (
        <Col xs="12" md="4">
        <Card>
          <p className="card-header text-center">{spore.name}</p>
          <CardImg top
            src={require(`${spore.image}`)}
            className="img-responsive"
            alt="..."
          />
          <CardHeader className="text-center small">
            {spore.imageAttr}
          </CardHeader>
          <CardBody>
            <CardText>
              {spore.description}
              </CardText>
          </CardBody>
          <div className="card-footer">
            <h3 className="text-center"><Button className="btn-success" onClick={() => props.handleClick(spore.id)}>{spore.price}</Button></h3>
          </div>
        </Card>
      </Col>
    )
}

const SporeComp = (props) => {

    console.log(props.cartItemList.hasOwnProperty(0))
    const SporeList = props.spores.map((spore) => {
        return RenderSpore(spore, props);
    })
   
    console.log(props);
    return (
    <Jumbotron>
    <Container>
        <Row className="">
        {SporeList}
      </Row>
      </Container>
    </Jumbotron>
  )
}

export default SporeComp;
import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

function HomeComp(props) {
        return (
          <Jumbotron>
          <Container>
            <Row>
              {/*<div class="col-4 col-sm-3 col-md-2 align-self-center">
                        <img src="img/logo.png" class="img-fluid" />
                    </div>*/}
              <Col xs="6" className="mx-auto">
                <figure className="figure">
                  <img src={require('./images/amanita.jpg')} id="amanita-image" className="img-fluid d-block mx-auto mt-5 figure-img" data-toggle="tooltip" title="Amanita Persicina, The Peach Fly Agaric, edible with special preparation. Credits to  Geoff Balme @ Mushroom Observer, Image licensed under Creative Commons Attribution-ShareAlike 3.0 Unported" />
                  <figcaption className="figure-caption text-center d-none d-md-block" id="amanita">Amanita Persicina, The Peach Fly Agaric, edible with special preparation. Credits to  Geoff Balme @ Mushroom Observer, Image licensed under Creative Commons <a href="https://creativecommons.org/licenses/by-sa/3.0/">Attribution-ShareAlike 3.0 Unported</a></figcaption>
                </figure>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <h2 className="text-center text-danger">Welcome...</h2>
                <h5>Welcome to Mushy 🍄 Love, the premier site on the internet about edible mushrooms in Florida. Check our 
                  index for a full list of Mushrooms on our site. If you have a mushroom you need to identify, why not check our feature key? 
                  And if you don't feel comfortable eating wild mushrooms, we have a full list of spores available for sale to grow
                  them in the comfort of your own home. 
                </h5>
              </Col>
            </Row>
          </Container>
          </Jumbotron>
        );
}

export default HomeComp;

import React from 'react';
import HeaderComp from './Header';
import HomeComp from './Home';
import IndexComp from './mIndex';
import FooterComp from './Footer';
import MUSHROOMS from './Mushrooms';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button } from 'reactstrap';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mushrooms: MUSHROOMS,
    }
  }

  render() {
    return (
      <Router>
        <div>
          <HeaderComp />
          <Switch>
            <Route exact path='/' component={HomeComp} />
            <Route path='/index' render={() => IndexComp(this.state.mushrooms)} />
            <Redirect to='/' />
          </Switch>
          <FooterComp />
        </div>
      </Router>
    )
  }
}


export default App;

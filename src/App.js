import React from 'react';
import HeaderComp from './Header';
import HomeComp from './Home';
import IndexComp from './mIndex';
import FooterComp from './Footer';
import MushroomComp from './Mushroom';
import KeyComp from './Key';
import SporesComp from './Spores';
import KeyCompId from './KeyID'
import ContactComp from './Contact';
import CartComponent from './Cart';
import MUSHROOMS from './Mushrooms';
import FEATURES from './Features';
import SPORES from './SporesDB'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';

const test = (props) => { 
  return (<div>Hello World!</div>)
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      mushrooms: MUSHROOMS,
      features: FEATURES,
      spores: SPORES,
      cartItems: 0,
      cartItemList: { 0: 0, 1: 0, 2: 0 },
      handleClick: this.handleClick
      
    }

    
  }
  
  handleClick(id) {
    this.setState(

      (state, props) => {
        return { cartItems: state.cartItems++}
      }
    )

    this.setState (
      (state, props) => {
        return { cartItemList: {
          ...state.cartItemList,
          [id]: state.cartItemList[id] + 1
        }}
      }
    )
  }
  
  render() {
    return (
      <Router>
        <div>
          <HeaderComp {... this.state}/>
          <Switch>
            <Route exact path='/' component={HomeComp} />
            <Route path='/index' render={() => IndexComp(this.state.mushrooms)} />
            <Route path='/mushroom/:id' 
              render={(routeProps) => <MushroomComp {... routeProps} {...this.state} />} />
            <Route path='/spores' render={(routeProps) => <SporesComp {... routeProps } {...this.state} {...this.handleIncrement}/>}/>
            <Route path='/key/:id' render ={(routeProps) => <KeyCompId {... routeProps} {...this.state} /> } />
            <Route path='/key' render ={(routeProps) => <KeyComp {...routeProps} {...this.state} />} />
            <Route path='/contactus' component={ContactComp} />
            <Route path='/cart' component={CartComponent} />
            <Redirect to='/' />
          </Switch>
          <FooterComp />
        </div>
      </Router>
    )
  }
}


export default App;

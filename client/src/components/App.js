import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Slider from './Slider';
import PropertyList from './properties/PropertyList';
import PropertyDetail from './properties/PropertyDetail';
import AdvanceSearch from './AdvanceSearch';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    // console.log("App props")
    // console.log(this.props);
    // console.log(this.state)
  } 
  render() {
    return (
      
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Slider} />  
          <Route exact path='/' component={AdvanceSearch} />
          <Route exact path="/properties" component={PropertyList}/>
          <Route exact path='/properties/:propertyId' component={PropertyDetail}/>
        </div>
      
      
      </BrowserRouter>
    );
  }
}

export default connect(null,actions)(App);

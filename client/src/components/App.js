import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Slider from './TopSlider';
import PropertyList from './properties/PropertyList';
import PropertyDetail from './properties/PropertyDetail';
import AdvanceSearch from './properties/AdvanceSearch';
import MyList from './properties/MyList';
import Contact from './Contact';
import aboutUs from './aboutUs';
import LatestProperties from './properties/LatestProperties';
import ourService from './ourService';
import ourAgent from './ourAgent';
import PromoBanner from './promoBanner';

import Footer from './footer';
import clientTestimonial from './clientTestimonial';
import latestNews from './latestNews';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    console.log("App props")
    console.log(this.props);
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
          <Route path="/mylist/:userId" component={MyList}/>
          {/* <Route exact path="/properties/searched" component={PropertyListSearched}/> */}
          <Route exact path='/properties/:propertyId' component={PropertyDetail}/>
          <Route exact path='/contact' component={Contact} />  
          <Route exact path='/' component={aboutUs}/>
          <Route exact path='/' component={LatestProperties}/>
          <Route exact path='/' component={ourService}/>
          <PromoBanner />
          <Route exact path='/' component={ourAgent}/>
          <Route exact path='/' component={clientTestimonial}/>
          <Route exact path='/' component={latestNews}/>


          <Footer />
        </div>
      
      
      </BrowserRouter>
    );
  }
}

export default connect(null,actions)(App);

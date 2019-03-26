import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPropertiesLatest } from '../actions';

// import Properties from './properties';
import _ from 'lodash';

const Slide = () => {
    return <div className="slide"></div>
}
const RightArrow = (props) => {
    return (
      <div className="slick-next" onClick={props.goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    );
  }

const LeftArrow = (props) => {
    return (
      <div className="slick-prev" onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
  

class TopSlider extends Component {
    state={
        slides:null,
        currentIndex: 0,
        translateValue: 0
    }
    
    componentDidMount() {
        this.props.fetchPropertiesLatest();
        console.log(this.props.properties)

        
    }
    
    goToPrevSlide = () => {
        if(this.state.currentIndex === 0) {
            return this.setState({
              currentIndex: 5,
              translateValue: 0
            })
          }
          this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
          }));

    }
    
    goToNextSlide = () => {
        if(this.state.currentIndex === 5) {
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            })
          }
          
          // This will not run if we met the if condition above
          this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
          }));
    }
    slideWidth = () => {
        return document.querySelector('.aa-slider-area').clientWidth
     }

    renderProperties = (fetchedData) => {
        let counter=0;
        
        
        
        
        
        
        return _.map(fetchedData, (property) => {
            counter++;
            // testData.push(property);
            return (
                <div className="aa-top-slider-single"  key={`topSlider ${counter}`} >
                    <img src={`img/slider/${counter}.jpg`} alt="slider" />
                    
                    <div className="aa-top-slider-content">
                        <span className="aa-top-slider-catg">{property.propertyType}</span>
                        <h2 className="aa-top-slider-title">{property.sq} Square Feet</h2>
                        <p className="aa-top-slider-location"><i className="fa fa-map-marker"></i>{property.address.streetAddress}, {property.address.city}</p>
                        <span className="aa-top-slider-off">{counter%3+1}0% OFF</span>
                        <p className="aa-top-slider-price">${property.price}</p>
                        <a href={`/properties/${property._id}`} className="aa-top-slider-btn">Read More <span className="fa fa-angle-double-right"></span></a>
                    </div>
                    
                  </div>
        )
        });

    }
    
    

    render () {
        // this.setState({slides:this.renderProperties(this.props.properties)})
        return (
            <section id="slider">
            <div className="aa-slider-area"> 
              {/* <!-- Top slider --> */}
              <div className="aa-top-slider" style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
             }}>
                
                {this.renderProperties(this.props.properties)}
        
                <LeftArrow 
                goToPrevSlide={this.goToPrevSlide}
                />  

                <RightArrow 
                goToNextSlide={this.goToNextSlide}    
                />
              </div>
            </div>

           
          </section>
            
        )
    }
}

// function mapStateToProps(state) {
//     return {surveys: state.surveys}; // from reducer
// }

function mapStateToProps({properties}) {
    

    return {properties}; // from reducer
}

export default connect(mapStateToProps, { fetchPropertiesLatest })(TopSlider);

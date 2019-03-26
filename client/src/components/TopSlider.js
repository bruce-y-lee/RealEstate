import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPropertiesLatest } from '../actions';

// import Properties from './properties';
import _ from 'lodash';
import axios from 'axios';

// var testData ;
class TopSlider extends Component {
    // state={properties:this.props.properties}
    
    componentDidMount = async ()=> {
        var res = await axios.get('/api/properties/latest');
        
        this.setState({
            properties:res.data
        })
        console.log(res);
        console.log(this.state.properties[0].address)
        
    }
    
    renderProperties = (fetchedData) => {
        let counter=0;
        // console.log(this.state[0].address);
        
        // if(this.state.properties && this.state.properties.addres !== undefined){
        //     _.map(this.state.properties,(property)=>{
        //         console.log(property);
        //         testData.push(property);
                
        //     })
        // } 
        
        // console.log(testData)
        console.log(fetchedData);
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
    // testData = ()=> {
    //     // this.props.properties.map(property => {
    //     //     console.log(property);
    //     //     testData.push(property)
    //     // })
    //     if(this.props.properties && this.props.properties.addres !== undefined){
    //         _.map(this.props.properties,(property)=>{
    //             console.log(property);
    //             testData.push(property);
                
    //         })
    //     } 
        
    //     console.log(testData)
    // }
    

    render () {
        // this.renderProperties(this.props.properties);
        // var data = this.props.properties;
        // data = JSON.stringify(data[0]);
        // console.log(typeof data);
        // data = JSON.parse(data);
        // console.log(typeof data);
        // this.testData();
        // {this.state? this.state.properties[0].propertyType:null}
        // {this.state? this.state.properties[0].sq:null}
        // if(this.state){
        // }
        return (
            <section id="aa-slider">
                <div className="aa-slider-area"> 
                {/* <!-- Top slider --> */}
                <div className="aa-top-slider">
                    {/* <!-- Top slider single slide --> */}
                    <div className="aa-top-slider-single">
                    <img src="img/slider/3.jpg" alt="img" />
                    {/* <!-- Top slider content --> */}
                    <div className="aa-top-slider-content">
                        <span className="aa-top-slider-catg">{this.state? this.state.properties[0].propertyType:null}</span>
                        <h2 className="aa-top-slider-title">{this.state? this.state.properties[0].sq:null} Square Feet</h2>
                        <p className="aa-top-slider-location"><i className="fa fa-map-marker"></i>
                                                {this.state? this.state.properties[0].address.streetAddress:null}, 
                                                {this.state? this.state.properties[0].address.city:null}</p>
                        <span className="aa-top-slider-off">30% OFF</span>
                        <p className="aa-top-slider-price">${this.state? this.state.properties[0].price:null}</p>
                        <a href={`/properties/${this.state? this.state.properties[0]._id:"/"}`} className="aa-top-slider-btn">Read More <span className="fa fa-angle-double-right"></span></a>
                    </div>
                    {/* <!-- / Top slider content --> */}
                    </div>
                    {/* <!-- / Top slider single slide -->
                    <!-- Top slider single slide --> */}
                    <div className="aa-top-slider-single">
                    <img src="img/slider/2.jpg" alt="img" />
                    {/* <!-- Top slider content --> */}
                    <div className="aa-top-slider-content">
                        <span className="aa-top-slider-catg">{this.state? this.state.properties[1].propertyType:null}</span>
                        <h2 className="aa-top-slider-title">{this.state? this.state.properties[1].sq:null} Square Feet</h2>
                        <p className="aa-top-slider-location"><i className="fa fa-map-marker"></i>
                                                {this.state? this.state.properties[1].address.streetAddress:null}, 
                                                {this.state? this.state.properties[1].address.city:null}</p>
                        <span className="aa-top-slider-off">20% OFF</span>
                        <p className="aa-top-slider-price">${this.state? this.state.properties[1].price:null}</p>
                        <a href={`/properties/${this.state? this.state.properties[1]._id:"/"}`} className="aa-top-slider-btn">Read More <span className="fa fa-angle-double-right"></span></a>
                    </div>
                    {/* <!-- / Top slider content --> */}
                    </div>
                    {/* <!-- / Top slider single slide -->
                    <!-- Top slider single slide --> */}
                    <div className="aa-top-slider-single">
                    <img src="img/slider/1.jpg" alt="img" />
                    {/* <!-- Top slider content --> */}
                    <div className="aa-top-slider-content">
                    <span className="aa-top-slider-catg">{this.state? this.state.properties[2].propertyType:null}</span>
                        <h2 className="aa-top-slider-title">{this.state? this.state.properties[2].sq:null} Square Feet</h2>
                        <p className="aa-top-slider-location"><i className="fa fa-map-marker"></i>
                                                {this.state? this.state.properties[2].address.streetAddress:null}, 
                                                {this.state? this.state.properties[2].address.city:null}</p>
                        <span className="aa-top-slider-off">35% OFF</span>
                        <p className="aa-top-slider-price">${this.state? this.state.properties[2].price:null}</p>
                        <a href={`/properties/${this.state? this.state.properties[2]._id:"/"}`} className="aa-top-slider-btn">Read More <span className="fa fa-angle-double-right"></span></a>
                    </div>
                    {/* <!-- / Top slider content --> */}
                    </div>
                    {/* <!-- / Top slider single slide -->       
                    <!-- Top slider single slide --> */}
                    <div className="aa-top-slider-single">
                    <img src="img/slider/5.jpg" alt="img" />
                    {/* <!-- Top slider content --> */}
                    <div className="aa-top-slider-content">
                    <span className="aa-top-slider-catg">{this.state? this.state.properties[3].propertyType:null}</span>
                        <h2 className="aa-top-slider-title">{this.state? this.state.properties[3].sq:null} Square Feet</h2>
                        <p className="aa-top-slider-location"><i className="fa fa-map-marker"></i>
                                                {this.state? this.state.properties[3].address.streetAddress:null}, 
                                                {this.state? this.state.properties[3].address.city:null}</p>
                        <span className="aa-top-slider-off">20% OFF</span>
                        <p className="aa-top-slider-price">${this.state? this.state.properties[3].price:null}</p>
                        <a href={`/properties/${this.state? this.state.properties[3]._id:"/"}`} className="aa-top-slider-btn">Read More <span className="fa fa-angle-double-right"></span></a>
                    </div>
                    {/* <!-- / Top slider content --> */}
                    </div>
                    {/* <!-- / Top slider single slide -->        
                    <!-- Top slider single slide --> */}
                    <div className="aa-top-slider-single">
                    <img src="img/slider/4.jpg" alt="img" />
                    {/* <!-- Top slider content --> */}
                    <div className="aa-top-slider-content">
                        <span className="aa-top-slider-catg">{this.state? this.state.properties[4].propertyType:null}</span>
                        <h2 className="aa-top-slider-title">{this.state? this.state.properties[4].sq:null} Square Feet</h2>
                        <p className="aa-top-slider-location"><i className="fa fa-map-marker"></i>
                                                {this.state? this.state.properties[4].address.streetAddress:null}, 
                                                {this.state? this.state.properties[4].address.city:null}</p>
                        <span className="aa-top-slider-off">30% OFF</span>
                        <p className="aa-top-slider-price">${this.state? this.state.properties[4].price:null}</p>
                        <a href={`/properties/${this.state? this.state.properties[4]._id:"/"}`} className="aa-top-slider-btn">Read More <span className="fa fa-angle-double-right"></span></a>
                    </div>
                    {/* <!-- / Top slider content --> */}
                    </div>
                    {/* <!-- / Top slider single slide -->
                    <!-- Top slider single slide --> */}
                    <div className="aa-top-slider-single">
                    <img src="img/slider/1.jpg" alt="img" />
                    {/* <!-- Top slider content --> */}
                    <div className="aa-top-slider-content">
                    <span className="aa-top-slider-catg">{this.state? this.state.properties[5].propertyType:null}</span>
                        <h2 className="aa-top-slider-title">{this.state? this.state.properties[5].sq:null} Square Feet</h2>
                        <p className="aa-top-slider-location"><i className="fa fa-map-marker"></i>
                                                {this.state? this.state.properties[5].address.streetAddress:null}, 
                                                {this.state? this.state.properties[5].address.city:null}</p>
                        <span className="aa-top-slider-off">35% OFF</span>
                        <p className="aa-top-slider-price">${this.state? this.state.properties[5].price:null}</p>
                        <a href={`/properties/${this.state? this.state.properties[5]._id:"/"}`} className="aa-top-slider-btn">Read More <span className="fa fa-angle-double-right"></span></a>
                    </div>
                    {/* <!-- / Top slider content --> */}
                    </div>
                    {/* <!-- / Top slider single slide --> */}
                </div>
                </div>
            </section>
        )

        
            
        
    }
}

// function mapStateToProps(state) {
//     return {surveys: state.surveys}; // from reducer
// }

// function mapStateToProps({properties}) {
//     if(properties && properties[0]){
//         testData = {properties}
//         console.log(testData);
//     }
    

//     return {properties}; // from reducer
// }

export default TopSlider;
// export default connect(mapStateToProps, { fetchPropertiesLatest })(TopSlider);

import React, { Component } from 'react';




import axios from 'axios';

//main slide with latest properties
class TopSlider extends Component {

    
    componentDidMount = async ()=> {
        var res = await axios.get('/api/properties/latest');
        
        this.setState({
            properties:res.data
        })

        
    }
    
    
    
    

    render () {
        
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



export default TopSlider;
// export default connect(mapStateToProps, { fetchPropertiesLatest })(TopSlider);

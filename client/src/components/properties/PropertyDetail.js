import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperty, fetchUser } from '../../actions';
import { Redirect } from 'react-router'
import axios from 'axios';
// import { fetchProperties } from '../../actions';
// import {withRouter} from 'react-router-dom';
const pStyle = {
    backgroundColor: '#b57de0',
    margin: '0px 50px'
  };
class PropertyDetail extends Component {
    componentDidMount() {
        if(this.props.match)
        this.props.fetchProperty(this.props.match.params.propertyId);
        else{
            this.props.fetchProperty(this.props.propertyId);
        }
        // this.props.fetchUser();
        // console.log("PropertyDetails");
        // console.log(this.props.match.params.propertyId);
    }
    
    propertyHeader(){
        return (
           
            <section id="aa-property-header">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="aa-property-header-inner">
                    <h2>Properties Details</h2>
                    <ol className="breadcrumb">
                    <li><a href="#">HOME</a></li>            
                    <li className="active">{this.props.properties.title}</li>
                  </ol>
                  </div>
                </div>
              </div>
            </div>
          </section> 
        )
    }
    propertyFeatures() {
        // console.log(this.props.properties.features);
        // let features = this.props.properties.features.split(" ").trim();
        let feat = this.props.properties.features;
        
        if(typeof(feat) == 'string'){
            // console.log(features);
            let featu = feat.split(' ');
            let features = featu.filter(Boolean);
            return features.map(feature => {
                    feature = feature.replace('_', " ");
                    return (
                        <li key={feature} >{feature}</li>
                    );
                });
            // console.log(features);

        }
        // let exst = "sdfsd sdkjhdsf skdjhfds skjhdf kjsdf ks dfkj g ";
        
        // return features.map(feature => {
        //     return (
        //         <li key={feature} >feature</li>
        //     );
        // });
        
        

    }
    handleClick = async () => {
        console.log(this.props.auth);
        const res = await axios.post('/api/mylist',{userId:this.props.auth._id, propertyId:this.props.match.params.propertyId });
        console.log(res);
    }
    handleDelete= async ()=>{
        this.props.deleteProperty();
        console.log(this.props.auth._id, this.props.propertyId)
        const res = await axios.patch('/api/mylist',{userId:this.props.auth._id, propertyId:this.props.propertyId });
        console.log(res);
        
            // <Redirect to={`/mylist/:${this.props.auth._id}`}/>
            window.location= `/mylist/${this.props.auth._id}`;
        
    }
    propertyBody() {
        return (
            <section id="aa-properties">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                        <div className="aa-properties-content"></div>
                            <div className="aa-properties-details">
                            <div className="aa-properties-details-img">
                            <img src="img/slider/1.jpg" alt="img"/>
                            {this.props.deleteProperty? null : <img src="img/slider/2.jpg" alt="img"/>
                             }
                            {this.props.deleteProperty? null : <img src="img/slider/3.jpg" alt="img"/>
                             }
                            
                            </div>
                            <div className="aa-properties-info">
                            <h2>{this.props.properties.title}</h2>
                            <span className="aa-price">${this.props.properties.price}</span>
                            {this.props.deleteProperty? <button className="aa-secondary-btn" style={pStyle} onClick={this.handleDelete}> Remove from My List</button>: 
                        <button className="aa-secondary-btn" style={pStyle} onClick={this.handleClick}>Add myList</button>}
                            
                            <p>{this.props.properties.body}</p>
                            <h4>Propery Features</h4>
                            <ul>
                                {this.propertyFeatures()}
                            </ul>
                            <h4>Property Video</h4>
                            <iframe width="100%" height="480" src="https://www.youtube.com/embed/CegXQps0In4" frameBorder="0" allowFullscreen></iframe>
                            <h4>Property Map</h4>
                            <iframe src="https://www.google.com/maps/embed/v1/place?q=40.7127837,-74.0059413&key=AIzaSyAf_FXuOWdjTUcby3nfonQwFZUy5Wcrqe8" width="100%" height="450" frameBorder="0" style={{border: "0"}} allowFullscreen></iframe>
                            </div>
                            {/* <!-- Properties social share --> */}
                            <div className="aa-properties-social">
                            <ul>
                                <li>Share</li>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                            </ul>
                            </div>
                            {/* <!-- Nearby properties --> */}
                            <div className="aa-nearby-properties">
                            <div className="aa-title">
                                <h2>Nearby Properties</h2>
                                <span></span>
                            </div>
                            <div className="aa-nearby-properties-area">
                                <div className="row">
                                <div className="col-md-6">
                                    <article className="aa-properties-item">
                                        <a className="aa-properties-item-img" href="#">
                                        <img alt="img" src="img/item/1.jpg"/>
                                        </a>
                                        <div className="aa-tag for-sale">
                                        For Sale
                                        </div>
                                        <div className="aa-properties-item-content">
                                        <div className="aa-properties-info">
                                            <span>5 Rooms</span>
                                            <span>2 Beds</span>
                                            <span>3 Baths</span>
                                            <span>1100 SQ FT</span>
                                        </div>
                                        <div className="aa-properties-about">
                                            <h3><a href="#">Appartment Title</a></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
                                        </div>
                                        <div className="aa-properties-detial">
                                            <span className="aa-price">
                                            $35000
                                            </span>
                                            <a className="aa-secondary-btn" href="#">View Details</a>
                                        </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-md-6">
                                    <article className="aa-properties-item">
                                    <a className="aa-properties-item-img" href="#">
                                        <img alt="img" src="img/item/2.jpg"/>
                                    </a>
                                    <div className="aa-tag for-sale">
                                        For Sale
                                    </div>
                                    <div className="aa-properties-item-content">
                                        <div className="aa-properties-info">
                                        <span>5 Rooms</span>
                                        <span>2 Beds</span>
                                        <span>3 Baths</span>
                                        <span>1100 SQ FT</span>
                                        </div>
                                        <div className="aa-properties-about">
                                        <h3><a href="#">Appartment Title</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae vero ducimus quibusdam odit vitae.</p>                      
                                        </div>
                                        <div className="aa-properties-detial">
                                        <span className="aa-price">
                                            $35000
                                        </span>
                                        <a className="aa-secondary-btn" href="#">View Details</a>
                                        </div>
                                    </div>
                                    </article>
                                </div>
                                </div>
                            </div>

                            </div>

                            </div>  
                            </div>
                        </div>
                    </div>
                    
            </section>
        )

    }
    render () {
        // console.log("propertyDetails render this.props")
        console.log(this.props.properties);
        return (
               <div>
                    {this.propertyHeader()}
                    {this.propertyBody()}
               </div>
                   
                     
        )
    }
}

// function mapStateToProps(state) {
//     return {surveys: state.surveys}; // from reducer
// }

function mapStateToProps({properties, auth}) {
    // console.log("propertyDetails mapstatetoProps state")
    // console.log(state);
    // console.log(auth)
    return {properties,auth}; // from reducer
}

// export default connect(null, { fetchProperty })(PropertyDetail);
export default connect(mapStateToProps, {fetchProperty})(PropertyDetail);
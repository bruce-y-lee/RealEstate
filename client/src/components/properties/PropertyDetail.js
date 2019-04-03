import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperty, fetchPropertiesNear} from '../../actions';

import axios from 'axios';
import AdvanceSearch from './AdvanceSearch';
// import { fetchProperties } from '../../actions';
// import {withRouter} from 'react-router-dom';
const pStyle = {
    backgroundColor: '#b57de0',
    margin: '0px 50px'
  };

class PropertyDetail extends Component {
    state={
        showDetailPage: true
    }
    
    componentDidMount() {
        if(this.props.match){
            console.log("this.props.match")

            this.props.fetchProperty(this.props.match.params.propertyId);

            this.props.fetchPropertiesNear(this.props.match.params.propertyId);
            
        }
        else{
            console.log("no this.props.match")
            
            this.props.fetchProperty(this.props.propertyId);
            this.props.fetchPropertiesNear(this.props.propertyId);
            

        }
        // this.props.fetchUser();
        // console.log("PropertyDetails");
        // console.log(this.props.match.params.propertyId);
        // console.log(this.props);
        
            

    }
    
    propertyHeader(){
        console.log(this.props)
        return (
           
            <section id="aa-property-header">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="aa-property-header-inner">
                    <h2>Properties Details</h2>
                    <ol className="breadcrumb">
                    <li><a href="/">HOME</a></li>            
                    <li className="active">{this.props.properties && this.props.properties.title ? this.props.properties.title:null}</li>
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
        // let city = this.props.properties.address;
        // console.log("city", feat);
        
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
    renderSaleTag = (type)=>{
        if(type==='for-rent'){
            return "For Rent"
        }else if (type ==='for-sale'){
            return "For Sale"
        }else{
            return "Sold Out"
        }

    }
    renderNearProperties = (fetchedData) => {
        return fetchedData.map(property => {
            return (
                <div className="col-md-6" key={`nearProperty ${property._id}`}>
                <article className="aa-properties-item">
                    <a className="aa-properties-item-img" href={`/properties/${property._id}`}>
                    <img alt="img" src={`img/item/${property.images[0]}`}/>
                    </a>
                    <div className={`aa-tag ${property.saleType}`}>
                    {this.renderSaleTag(property.saleType)}
                    </div>
                    <div className="aa-properties-item-content">
                    <div className="aa-properties-info">
                        <span>{property.bedrooms} Rooms</span>
                        
                        <span>{property.bathrooms} Baths</span>
                        <span>{property.sq} SQ FT</span>
                        <span>{property.address.city}</span>
                    </div>
                    <div className="aa-properties-about">
                        <h3><a href={`/properties/${property._id}` }>{property.title}</a></h3>
                        <p>{property.body}</p>                      
                    </div>
                    <div className="aa-properties-detial">
                        <span className="aa-price">
                        ${property.price}
                        </span>
                        <a className="aa-secondary-btn" href={`/properties/${property._id}`}>View Details</a>
                    </div>
                    </div>
                </article>
                </div>
            )
        })
    }

    fetchNearProperties = async (city) => {
        // if(this.props.properties){
            // console.log(this.props.address.city);
            // var nearProperties;
            // if(this.props.properties.address && this.props.properties.address.city){
               var result= await axios.get(`/api/properties/${city}`);
            //    if(nearProperties)
               return this.renderNearProperties(result.data)
           
    
    }
    renderDetail(){
        return(
            <div className="col-md-8">
                <div className="aa-properties-content"></div>
                    <div className="aa-properties-details">
                    <div className="aa-properties-details-img">
                    <img src={`img/item/${this.props.properties.images && this.props.properties.images[0]? this.props.properties.images[0]:null}`} alt="img"/>
                    {this.props.deleteProperty? null : <img src={`img/item/${this.props.properties.images && this.props.properties.images[1]? this.props.properties.images[1]:null}`} alt="img"/>
                        }
                    {this.props.deleteProperty? null : <img src={`img/item/${this.props.properties.images && this.props.properties.images[2]? this.props.properties.images[2]:null}`} alt="img"/>
                        }
                    {this.props.deleteProperty? null : <img src={`img/item/${this.props.properties.images && this.props.properties.images[3]? this.props.properties.images[3]:null}`} alt="img"/>
                        }
                    {this.props.deleteProperty? null : <img src={`img/item/${this.props.properties.images && this.props.properties.images[4]? this.props.properties.images[4]:null}`} alt="img"/>
                    }
                    </div>
                    <div className="aa-properties-info">
                    <h2>{this.props.properties.title}</h2>
                    <h3>{this.props.properties.address && this.props.properties.address.streetAddress ? this.props.properties.address.streetAddress:null}, &nbsp;
                    {this.props.properties.address && this.props.properties.address.city ? this.props.properties.address.city: null}</h3>
                    <span className="aa-price">${this.props.properties.price}</span>
                    {this.props.deleteProperty? <button className="aa-secondary-btn" style={pStyle} onClick={this.handleDelete}> Remove from My List</button>: 
                <button className="aa-secondary-btn" style={pStyle} onClick={this.handleClick}>Add myList</button>}
                    
                    <p>{this.props.properties.body}</p>
                    <h4>Propery Features</h4>
                    <ul>
                        {this.propertyFeatures()}
                    </ul>
                        
                    <h4>Property Video</h4>
                    <iframe width="100%" height="480" src="https://www.youtube.com/embed/CegXQps0In4" title="propertyVideo"frameBorder="0" allowFullScreen></iframe>
                    <h4>Property Map</h4>
                    <iframe src={`https://www.google.com/maps/embed/v1/place?q=${this.props.properties.address && this.props.properties.address.city ? this.props.properties.address.city: null},${this.props.properties.address && this.props.properties.address.country ? this.props.properties.address.country: null}&key=AIzaSyAf_FXuOWdjTUcby3nfonQwFZUy5Wcrqe8`} width="100%" height="450" title="propertyMap" frameBorder="0" style={{border: "0"}} allowFullScreen></iframe>
                    </div>
                    {/* <!-- Properties social share --> */}
                    <div className="aa-properties-social">
                    <ul>
                        <li>Share</li>
                        <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="/"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="/"><i className="fa fa-pinterest"></i></a></li>
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
                                {/* {this.props.properties.address && this.props.properties.address.city ? this.fetchNearProperties(this.props.properties._id):null}*/}
                                {/* {this.fetchNearProperties(this.props.propertiesNear)} */}
                                {this.renderNearProperties(this.props.propertiesNear)}
                        </div>
                    </div>

                    </div>

                    </div>  
                </div>
                           
        )
    }
    detailToSearch(){
        console.log("detail to Search");
        this.setState({showDetailPage:false})
    }
    propertyBody() {
        return (
            <section id="aa-properties">
                    <div className="container">
                    <div className="row">
                        <AdvanceSearch search = {this.detailToSearch.bind(this)}/>
                        {this.state.showDetailPage? this.renderDetail(): null}
                         
                    </div>
                    </div>
                    
            </section>
        )

    }
    render () {
        // console.log("propertyDetails render this.props")
        if(this.props.properties)
            // console.log(this.props.properties.address.city);


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

// function mapStateToProps({property, auth}) {
function mapStateToProps({properties,auth,propertiesNear}) {

    // console.log(state);
    // if(properties.length >0)
        return {properties, auth, propertiesNear}; // from reducer
    
    // return state; // from reducer
}

// export default connect(null, { fetchProperty })(PropertyDetail);
export default connect(mapStateToProps, {fetchProperty, fetchPropertiesNear })(PropertyDetail);


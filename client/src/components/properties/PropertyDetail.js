import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperty, fetchPropertiesNear} from '../../actions';

import axios from 'axios';
import AdvanceSearch from './AdvanceSearch';
import numberWithCommas from '../../utils/numberWithCommas';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const pStyle = {
    backgroundColor: '#b57de0',
    margin: '0px 50px'
  };

class PropertyDetail extends Component {
    state={
        showDetailPage: true,
        selectedVideo: null
    }
    
    componentDidMount() {
        if(this.props.match){
            // console.log("this.props.match") // component loaded by react router
            //get property info
            this.props.fetchProperty(this.props.match.params.propertyId);
            //get property's near properties
            this.props.fetchPropertiesNear(this.props.match.params.propertyId);
            
        }
        else{
            // console.log("no this.props.match")
            
            this.props.fetchProperty(this.props.propertyId);
            this.props.fetchPropertiesNear(this.props.propertyId);
            

        }
        
        if(this.props.properties.videos && this.props.properties.videos[0]){
            this.setState({
                selectedVideo: this.props.properties.videos[0]
            })
            console.log(this.props.properties.vidoes[0]);
            console.log("videos?")
       }
       
        
    }
    
    propertyHeader(){
        // console.log(this.props)
        console.log(this.props.properties);
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
       
        let feat = this.props.properties.features;
        let featu;
       //list of feature of the property 
        if(typeof(feat) == 'string'){
            // console.log(features);
            if(this.props.properties.imageSource){
                featu = feat.split(',');
            }
            else{
                featu = feat.split(' ');
            }
            
            let features = featu.filter(Boolean);
            return features.map(feature => {
                    feature = feature.replace('_', " ");
                    return (
                        <li key={feature} >{feature}</li>
                    );
                });
            // console.log(features);

        }
       
        
        

    }
    handleClick = async () => {
        
        //add property id to user
        const res = await axios.post('/api/mylist',{userId:this.props.auth._id, propertyId:this.props.match.params.propertyId });
        if(res){
            if (window.confirm('Do you want to go to myList page?')) {
                window.location = `/mylist/${this.props.auth._id}`;
            } else {
                // Do nothing!
            }
        }
        
    }
    handleDelete= async ()=>{
        this.props.deleteProperty();
        //remove from property if of user's my list
        const res = await axios.patch('/api/mylist',{userId:this.props.auth._id, propertyId:this.props.propertyId });
            if(res)
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
            let imgSrc = property.imageSource? property.imageSource : 'img/item/';
            return (
                <div className="col-md-6" key={`nearProperty ${property._id}`}>
                <article className="aa-properties-item">
                    <a className="aa-properties-item-img" href={`/properties/${property._id}`}>
                    <img alt="img" src={imgSrc+property.images[0] }/>
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
                        ${property.price? numberWithCommas(property.price):null}
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
        
               var result= await axios.get(`/api/properties/${city}`);
            //    if(nearProperties)
               return this.renderNearProperties(result.data)
           
    
    }
    renderSub(){
        let imgSrc = this.props.properties.imageSource? this.props.properties.imageSource:'img/item/';
        if(this.props.properties.images && this.props.properties.images[0]){
            return this.props.properties.images.map(i=>{
                return (<div key={`sliderImage ${i}`}>
                     <img src={imgSrc+i} alt="img"/>
                </div>
               
                )
            })
        }
    }
    // selectVideo = (e) =>{
    //     console.log(e.target.value);
    // }
    videoList(){
        let count =0;
           return this.props.properties.videos.map(v =>{
                count++;
                return <li key = {v} value={v} onClick={()=>this.setState({selectedVideo:v})}>Video {count}</li>
            })
        
    }
    renderVideos(){
        
        console.log(this.state)
        if(this.props.properties.videos && this.props.properties.videos.length > 1){
            return(
                <div>
                    <iframe width="100%" height="480" src={this.state.selectedVideo? this.props.properties.imageSource+this.state.selectedVideo : this.props.properties.imageSource+this.props.properties.videos[0]} title="propertyVideo"frameBorder="0" allowFullScreen></iframe>
                    <ul>
                        {this.videoList()}
                    </ul>
                </div>
            )
        }else{
            return <iframe width="100%" height="480" src="https://www.youtube.com/embed/CegXQps0In4" title="propertyVideo"frameBorder="0" allowFullScreen></iframe>
        }

    }
    
    renderDetail(){
        
        return(
            <div className="col-md-8">
            
                <div className="aa-properties-content"></div>
                    <div className="aa-properties-details">
                    
                     <Carousel>
                      {this.renderSub()}   
                     </Carousel>
                    
                    {/* </div> */}
                    <div className="aa-properties-info">
                    <h2>{this.props.properties.title}</h2>
                    <h3>{this.props.properties.address && this.props.properties.address.streetAddress ? this.props.properties.address.streetAddress:null}, &nbsp;
                    {this.props.properties.address && this.props.properties.address.city ? this.props.properties.address.city: null}</h3>
                    <span className="aa-price">${this.props.properties && this.props.properties.price? numberWithCommas(this.props.properties.price):null}</span>
                    {this.props.deleteProperty? <button className="aa-secondary-btn" style={pStyle} onClick={this.handleDelete}> Remove from My List</button>: 
                    <button className="aa-secondary-btn" style={pStyle} onClick={this.handleClick}>Add myList</button>}
                    
                    <p>{this.props.properties.body}</p>
                    <h4>Propery Features</h4>
                    <ul>
                        {this.propertyFeatures()}
                    </ul>
                        
                    <h4>Property Video</h4>
                    {this.renderVideos()}
                    <h4>Property Map</h4>
                    <iframe src={`https://www.google.com/maps/embed/v1/place?q=${this.props.properties.address && this.props.properties.address.city ? this.props.properties.address.city: null},${this.props.properties.address && this.props.properties.address.country ? this.props.properties.address.country: null}&key=AIzaSyAf_FXuOWdjTUcby3nfonQwFZUy5Wcrqe8`} width="100%" height="450" title="propertyMap" frameBorder="0" style={{border: "0"}} allowFullScreen></iframe>
                    </div>
                    {/* <!-- Properties social share --> */}
                    <div className="aa-properties-social">
                    <ul>
                        <li>Share</li>
                        <li><a href="/"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="/"><i className="fab fa-google-plus"></i></a></li>
                        <li><a href="/"><i className="fab fa-pinterest"></i></a></li>
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
                      
                                {this.renderNearProperties(this.props.propertiesNear)}
                        </div>
                    </div>

                    </div>

                    </div>  
                </div>
                           
        )
    }
    detailToSearch(){
        // console.log("detail to Search");
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
        
        return (
               <div>
                    {this.propertyHeader()}
                    {this.propertyBody()}
                    
               </div>
                   
                     
        )
    }
}


function mapStateToProps({properties,auth,propertiesNear}) {

    
        return {properties, auth, propertiesNear}; // from reducer
    
    
}

// export default connect(null, { fetchProperty })(PropertyDetail);
export default connect(mapStateToProps, {fetchProperty, fetchPropertiesNear })(PropertyDetail);


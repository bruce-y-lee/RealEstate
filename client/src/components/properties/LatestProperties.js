import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPropertiesLatest } from '../../actions';
import numberWithCommas from '../../utils/numberWithCommas';

// import Properties from './properties';
import _ from 'lodash';

class LatestProperties extends Component {
    
    componentDidMount() {
        this.props.fetchPropertiesLatest();
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
    renderProperties = (fetchedData) => {
        // const min = 1;
        // const max = 15;


        return _.map(fetchedData, (property) => {
            // const rand = parseInt(min + Math.random() * (max - min));
            let imgSrc = property.imageSource? property.imageSource :'img/item/';
            return (
                <div className="col-md-4" key={property._id}>
                    <article className="aa-properties-item">
                        <a href={`/properties/${property._id}` } className="aa-properties-item-img">
                        <img src={imgSrc+property.images[0]} alt="img" />
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
                            ${numberWithCommas(property.price)}
                            </span>
                            <a href={`/properties/${property._id}` } className="aa-secondary-btn">View Details</a>
                        </div>
                        </div>
                    </article>
                </div>
        )
        });

    }
    

    render () {
        return (
            <section id="aa-latest-property">
                <div className="container">
                <div className="aa-latest-property-area">
                    <div className="aa-title">
                    <h2>Latest Properties</h2>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit ea nobis quae vero voluptatibus.</p>         
                    </div>
                    <div className="aa-latest-properties-content">
                    <div className="row equal">
                        {this.renderProperties(this.props.properties)}
                    </div>
                    </div>
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

export default connect(mapStateToProps, { fetchPropertiesLatest })(LatestProperties);

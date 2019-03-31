import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPropertiesPopular } from '../../actions';

// import Properties from './properties';
import _ from 'lodash';

class PopularProperties extends Component {
    
    componentDidMount() {
        this.props.fetchPropertiesPopular();
    }
   
    renderProperties = (fetchedData) => {
        // const min = 1;
        // const max = 15;


        return _.map(fetchedData, (property) => {
            // const rand = parseInt(min + Math.random() * (max - min));
            return (
                <div className="media" key={`popularProperties ${property._id}`}>
                <div className="media-left">
                  <a href={`/properties/${property._id}`}>
                    <img className="media-object" src={`img/item/${property.images[0]}`} alt="img"/>
                  </a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading"><a href={`/properties/${property._id}`}>{property.address.streetAddress}</a></h4>
                  <p>{property.title}</p>                
                  <span>${property.price}</span>
                </div>              
              </div>
        )
        });

    }
    

    render () {
        return (
            <div className="aa-properties-single-sidebar">
                <h3>Populer Properties</h3>
                 {this.renderProperties(this.props.propertiesPopular)}  
            </div>
            
        )
    }
}

// function mapStateToProps(state) {
//     return {surveys: state.surveys}; // from reducer
// }

function mapStateToProps({propertiesPopular}) {
    return {propertiesPopular}; // from reducer
}

export default connect(mapStateToProps, { fetchPropertiesPopular })(PopularProperties);

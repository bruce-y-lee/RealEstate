import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions';
import PropertyDetail from './PropertyDetail';

class PropertyList extends Component {
    componentDidMount() {
        this.props.fetchProperties();
    }
    propertyAllHeader(){
        return (
            <section id="aa-property-header">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="aa-property-header-inner">
                        <h2>Properties Page</h2>
                        <ol className="breadcrumb">
                        <li><a href="#">HOME</a></li>            
                        <li className="active">PROPERTIES</li>
                    </ol>
                    </div>
                    </div>
                </div>
                </div>
            </section> 
        )
    }
    propertyAllBody(){
        return (
            <section id="aa-properties">
                <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <div className="aa-properties-content">
                    {/* <!-- start properties content head --> */}
                        <div className="aa-properties-content-head">              
                        <div className="aa-properties-content-head-left">
                            <form action="" className="aa-sort-form">
                            <label >Sort by</label>
                            <select name="">
                                <option value="1" select="Default">Default</option>
                                <option value="2">Name</option>
                                <option value="3">Price</option>
                                <option value="4">Date</option>
                            </select>
                            </form>
                            <form action="" className="aa-show-form">
                            <label >Show</label>
                            <select name="">
                                <option value="1" selected="12">6</option>
                                <option value="2">12</option>
                                <option value="3">24</option>
                            </select>
                            </form>
                        </div>
                        <div className="aa-properties-content-head-right">
                            <a id="aa-grid-properties" href="#"><span className="fa fa-th"></span></a>
                            <a id="aa-list-properties" href="#"><span className="fa fa-list"></span></a>
                        </div>            
                        </div>
                        {/* <!-- Start properties content body --> */}
                        <div className="aa-properties-content-body">
                        <ul className="aa-properties-nav">
                            {this.renderPropeerties()}

                        </ul>
                        </div>
                        {this.paganation()}
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
    paganation() {
        return(
            <div className="aa-properties-content-bottom">
              <nav>
                <ul className="pagination">
                  <li>
                    <a href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li className="active"><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
        
        ) 
    }
    onClickDetail(propertyId){

    }
    renderPropeerties() {
        return this.props.properties.map(property => {
            return (
                <li key={property._id}>
                  <article className="aa-properties-item">
                    <a className="aa-properties-item-img" href="#">
                      <img alt="img" src="img/item/6.jpg"/>
                    </a>
                    <div className={`aa-tag ${property.sold ? "sold-out":"for-sale"}`}>
                      {property.sold ? "Sold Out" : "For Sale"}
                    </div>
                    <div className="aa-properties-item-content">
                      <div className="aa-properties-info">
                        <span>{property.bedrooms} Rooms</span>
                        
                        <span>{property.bathrooms} Baths</span>
                        <span>{property.sq} SQ FT</span>
                      </div>
                      <div className="aa-properties-about">
                        <h3><a href="#">{property.title}</a></h3>
                        <p>{property.body}</p>                      
                      </div>
                      <div className="aa-properties-detial">
                        <span className="aa-price">
                          ${property.price/20}M 
                        </span>
                        <a className="aa-secondary-btn" href={`/properties/${property._id}`}>View Details</a>
                      </div>
                    </div>
                  </article>
                </li>
                
            );
        });
    }

    render () {
        return (
            <div>
                {this.propertyAllHeader()}
                {this.propertyAllBody()}
            </div>
            
        )
    }
}

// function mapStateToProps(state) {
//     return {surveys: state.surveys}; // from reducer
// }

function mapStateToProps({properties}) {
    return {properties}; // from reducer
}

export default connect(mapStateToProps, { fetchProperties })(PropertyList);

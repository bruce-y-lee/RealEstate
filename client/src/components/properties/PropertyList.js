import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions';
import PropertyDetail from './PropertyDetail';
import Properties from './properties';

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
    

    render () {
        return (
            <div>
                {this.propertyAllHeader()}
                <Properties
                    data={this.props.properties}
                    />
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

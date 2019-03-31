import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions';
import AdvanceSearch from './AdvanceSearch';
import Properties from './properties';

class PropertyList extends Component {
    state={
        
        showListPage: true
    }
    componentDidMount() {
        this.props.fetchProperties();
    }
    listToSearch(){
        // console.log("detail to Search");
        this.setState({
            
            showListPage: false
        })
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
                        <li><a href="/">HOME</a></li>            
                        <li className="active">PROPERTIES</li>
                    </ol>
                    </div>
                    </div>
                </div>
                </div>
            </section> 
        )
    }
    
    propertyBody() {
        return (
            <section id="aa-properties">
                    <div className="container">
                    <div className="row">
                        <AdvanceSearch search = {this.listToSearch.bind(this)}/>
                        {this.state.showListPage? <Properties
                                            data={this.props.properties}/>: null}
                         
                    </div>
                    </div>
                    
            </section>
        )

    }
    render () {
        return (
            <div>
                {this.propertyAllHeader()}
                {this.propertyBody()}
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyList } from '../../actions';
// import PropertyDetail from './PropertyDetail';
import Properties from './properties';
import PropertyDetail from './PropertyDetail';

class MyList extends Component {
    state={
        renderProperties: true,
        rednerPropertyDetail: false
    }

    handleDetail = (propertyId) => {
        this.setState({
            renderProperties: false,
            rednerPropertyDetail: true,
            propertyId
        })
    }
    handleDelete = () => {
        console.log(this.state.propertyId)
    }

    componentDidMount() {
        this.props.fetchMyList(this.props.match.params.userId);

    }
    propertyAllHeader(){
        return (
            <section id="aa-property-header">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="aa-property-header-inner">
                        <h2>My List Page</h2>
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
        // console.log(this.props.properties);
        // console.log(this.state);
        return (
            <div>
                
                {this.state.renderProperties?
                    <div>
                        {this.propertyAllHeader()}
                    <Properties
                        data={this.props.properties}
                        detail = {this.handleDetail.bind(this)}
                        />
                    </div>
                    : null
                    }
                {this.state.rednerPropertyDetail?
                    <PropertyDetail
                        propertyId = {this.state.propertyId}
                        deleteProperty={this.handleDelete}
                        />
                        : null

                }    
            </div>
            
        )
    }
}

// function mapStateToProps(state) {
//     return {surveys: state.surveys}; // from reducer
// }

function mapStateToProps({properties,auth}) {
    return {properties, auth}; // from reducer
}

export default connect(mapStateToProps, { fetchMyList })(MyList);

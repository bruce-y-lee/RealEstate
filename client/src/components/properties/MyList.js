import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyList } from '../../actions';
// import PropertyDetail from './PropertyDetail';
import Properties from './properties';
import PropertyDetail from './PropertyDetail';
import AdvanceSearch from './AdvanceSearch';

class MyList extends Component {
    state={
        showList: true,
        showDetail: false,
        
    }

    handleDetail = (propertyId) => {
        this.setState({
            showList: true,
            showDetail: false,
            
            propertyId
        })
    }
    handleSearch = () => {
        this.setState({
            showList: false,
            showDetail: false
            
            
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
        console.log(this.props.properties)
        return (
            <section id="aa-properties">
                    <div className="container">
                    <div className="row">
                        <AdvanceSearch search = {this.handleSearch.bind(this)}/>
                        {this.state.showList? <Properties
                                            data={this.props.properties}
                                            auth={this.props.auth}/>: null}
                         
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
    // render () {
    //     // console.log(this.props.properties);
    //     // console.log(this.state);
    //     return (
    //         <div>
                
    //             {this.state.renderProperties?
    //                 <div>
    //                     {this.propertyAllHeader()}
    //                 {/* <AdvanceSearch /> */}
    //                 <Properties
    //                     data={this.props.properties}
    //                     detail = {this.handleDetail.bind(this)}
    //                     myListToSearch = {this.handleSearch.bind(this)}
    //                     />
    //                 </div>
    //                 : null
    //                 }
    //             {this.state.rednerPropertyDetail?
    //             <div>

    //                  {/* <AdvanceSearch /> */}
    //                 <PropertyDetail
    //                     propertyId = {this.state.propertyId}
    //                     deleteProperty={this.handleDelete}
    //                     />
    //                 </div>
    //                     : null

    //             }    
    //         </div>
            
    //     )
    // }
}

// function mapStateToProps(state) {
//     return {surveys: state.surveys}; // from reducer
// }

function mapStateToProps({properties,auth}) {
    return {properties, auth}; // from reducer
}

export default connect(mapStateToProps, { fetchMyList })(MyList);

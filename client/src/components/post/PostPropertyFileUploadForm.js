import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperty } from '../../actions';
import numberWithCommas from '../../utils/numberWithCommas';

import axios from 'axios';
import {Progress} from 'reactstrap';
import './uploadStyle.css';

class PostPropertyFileUploadForm extends Component {
    state={
        // address: null,
        selectedFile:null,
        loaded:0
    }
    componentDidMount() {
        //fetch created property info
        // console.log(this.props.propertyId);
        this.props.fetchProperty(this.props.propertyId);
        
        // console.log(this.props.onCancel);
        // console.log(address);

        // this.setState({address});
    }
    fileSelectedHandler = event => {
        // console.log(event.target.files[0]);
        //files to state
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0
          })

    }
    fileUploadHandler= async ()=>{
        //create form data for files

        const data = new FormData(); 
        
       let address= this.props.properties.address.streetAddress+" "+this.props.properties.address.city;
        
        
        //to update property data add property id 
        data.append('propertyId',this.props.propertyId);
        //to create unique file name add address
        data.append('address',address);
        
        data.append('file', this.state.selectedFile);
        // console.log(this.state.selectedFile);
        var res = await axios.post('/api/uploadpropertyimages',data,
        {
            onUploadProgress: ProgressEvent => {
               
              this.setState({
                loaded: (ProgressEvent.loaded / ProgressEvent.total*100)
            })
            
        },
        }
        )

        //reload property data to show images
        this.props.fetchProperty(this.props.propertyId);
    }
    clickNext=()=>{
        console.log("final?");
        window.confirm("completed?");
    }
    clickBack= async () =>{
        // console.log("back to review? need to delete property data");
        let result = await axios.patch('/api/removeproperty',{propertyId:this.props.propertyId});
        
        this.props.onUploadToReview();
        
    }
    propertyFeatures() {
       
        let feat = this.props.properties.features;
       
       //list of feature of the property 
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
       
        
        

    }

    renderImages(){
        if(this.props.properties && this.props.properties.images){
            return this.props.properties.images.map(i=>{
                return (
                    <img key={i} src={`img/item/${i}`} alt="img" style={{width:'150px'}}/>
                )
            })
        }
        
    }
    fileUpload(){
        return(
            <form >
                        
                <div className="form-group files">
                    <label>Upload Image </label>
                
                    <div>   
                        <input   type="file" accept='.jpg, .png, .jpeg' multiple onChange={this.fileSelectedHandler} />
                        <button type="button" className="btn btn-success btn-block" onClick={this.fileUploadHandler}>Upload</button> 
                        <Progress max="100" color="success" value={this.state.loaded} style={{marginTop:'15px'}} >{Math.round(this.state.loaded,2) }%</Progress>

                    </div>

                </div>
                       
            </form>
        )
        
    }
    renderProperty() {
        // console.log(this.props.properties);

        
            return(
                // <div className="col-md-8">
                    <div className="aa-properties-content">
                        <div className="aa-properties-details">
                        
                        <div className="aa-properties-info">
                        <h2>{this.props.properties.country}</h2>
                        <h3>{this.props.properties.address && this.props.properties.address.streetAddress ? this.props.properties.address.streetAddress:null}, &nbsp;
                        {this.props.properties.address && this.props.properties.address.city ? this.props.properties.address.city: null}</h3>
                        {/* <span className="aa-price">${this.props.properties && this.props.properties.price? numberWithCommas(this.props.properties.price):null}</span> */}
                        <span className="aa-price">Bedrooms : {this.props.properties.bedrooms}</span>
                        
                        
                        
                        <p>{this.props.properties.body}</p> */}
                        <h4>Propery Features</h4>
                        <ul>
                            {this.propertyFeatures()}
                        </ul>

                       
                            
                        <h4>Property Video</h4>
                       
                        
                        {/* <iframe src={`https://www.google.com/maps/embed/v1/place?q=${this.props.properties.address && this.props.properties.address.city ? this.props.properties.address.city: null},${this.props.properties.address && this.props.properties.address.country ? this.props.properties.address.country: null}&key=AIzaSyAf_FXuOWdjTUcby3nfonQwFZUy5Wcrqe8`} width="100%" height="450" title="propertyMap" frameBorder="0" style={{border: "0"}} allowFullScreen></iframe> */}
                        </div>
                        {/* <!-- Properties social share --> */}
                        
                        {/* <!-- Nearby properties --> */}
                        
    
                        </div>  
                 </div>
                               
            )
        
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">    
                        {this.renderProperty()}
                    </div>
    
                    <div className="col-md-6">
                        <h4>Property Images</h4>
                        {this.renderImages()}
                        {this.fileUpload()}
                    </div>

                        <button type="button" onClick={this.clickBack} className="btn btn-warning btn-lg">
                            Back
                        </button>
                        <button type="button" onClick={this.clickNext} className="btn btn-primary btn-lg pull-right" >
                            Next 
                        </button>    
                </div>
                
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        properties: state.properties,
        formValues: state.form.postPropertyForm.values
    }; // from reducer
}

export default connect(mapStateToProps, { fetchProperty })(PostPropertyFileUploadForm);
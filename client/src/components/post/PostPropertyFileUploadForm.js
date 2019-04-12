import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProperty } from '../../actions';
import numberWithCommas from '../../utils/numberWithCommas';

import axios from 'axios';
import {Progress} from 'reactstrap';
import './uploadStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var ulStyle = {
    MozColumnCount: '3',
    MozColumnGap: '20px',
    WebkitColumnCount: '3',
    WebkitColumnGap: '20px',
    columnCount: '3',
    columnGap: '20px',
}
class PostPropertyFileUploadForm extends Component {
    state={
        // address: null,
        selectedFile:null,
        loaded:0
    }
    componentDidMount() {
        //fetch created property info
        console.log(this.props.propertyId);
        this.props.fetchProperty(this.props.propertyId);
        
        
    }
    fileSelectedHandler = (event) => {
        // console.log(event.target.files[0]);
        //files to state
        if(this.maxSelectFile(event) && this.checkFileSize(event)){ 
            this.setState({
                selectedFile: event.target.files,
                loaded: 0
            })
        }

    }
    maxSelectFile=(event) => {
        let files = event.target.files // create file object
            if (files.length > 5) { 
               const msg = 'Only 5 images can be uploaded at a time'
               event.target.value = null // discard selected file
            //    console.log(msg)
               toast.error(msg)
              return false;
     
          }
        return true;
     
     }
     checkFileSize= (event) => { //if file saize is over 1M and total 4M error
        let files = event.target.files
        let size = 15000000 
        let err = ""; 
        for(let i = 0; i < files.length; i++) {
            if (files[i].size > size) {
            err += files[i].name+'is too large, please pick a smaller file\n';
            }
        };
        let totalSize=0;
        for(let i = 0;i < files.length; i++){
            totalSize += files[i].size;
        }
        if(totalSize > size ){
            err += 'Total size is too large, please pick less files\n';
        }
        if (err !== '') {
        event.target.value = null
        // console.log(err)
        toast.error(err);
        return false
   }
   
   return true;
   
   }
    fileUploadHandler= async ()=>{
        //create form data for files

        const data = new FormData(); 
        
       let address= this.props.properties.address.streetAddress+" "+this.props.properties.address.city;
        
        
        //to update property data add property id 
        data.append('propertyId',this.props.propertyId);
        //to create unique file name add address
        data.append('address',address);
        
        // data.append('file', this.state.selectedFile);
        for(let i = 0; i<this.state.selectedFile.length; i++) {
            data.append('file', this.state.selectedFile[i])
        }
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
        console.log(res);
        if(res.statusText==="OK")
            toast.success('upload success')
        else
            toast.error('upload fail')
        //reload property data to show images
        this.props.fetchProperty(this.props.propertyId);
    }
    //remove clicked image from the form
    removeImage = async (image)=>{
        await axios.patch('/api/uploadpropertyremoveimage',{propertyId:this.props.propertyId, image:image});
        // console.log(image);
        
        this.props.fetchProperty(this.props.propertyId);
    }
    //remove clicked video from the form
    removeVideo = async (video)=>{
        await axios.patch('/api/uploadpropertyremovevideo',{propertyId:this.props.propertyId, video:video});
        // console.log(video);
        
        this.props.fetchProperty(this.props.propertyId);
    }
    clickNext = () => {
        console.log("final?");
        window.confirm("completed?");
    }
    clickBack = async () =>{
        // console.log("back to review? need to delete property data");
        let result = await axios.patch('/api/removeproperty',{propertyId:this.props.propertyId});
        
        console.log(result);
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
                    <li key={i} onClick={()=>this.removeImage(i)}>
                        <img  src={this.props.properties.imageSource? this.props.properties.imageSource+i : `/img/item/${i}`} alt="img" style={{width:'150px'}}/>
                         <i className="fas 5x fa-times-circle"></i>   
                    </li>
                        
                    
                    
                )
            })
        }
        
    }
    renderVideos(){
        if(this.props.properties && this.props.properties.videos){
            return this.props.properties.videos.map(i=>{
                return (
                    <li key={i} onClick={()=>this.removeVideo(i)}>
                        {/* <img  src={this.props.properties.imageSource? this.props.properties.imageSource+i : null} alt="img" style={{width:'150px'}}/> */}
                        <iframe width="100%" height="200" src={this.props.properties.imageSource+i} title="propertyVideo" frameBorder="0" allowFullScreen></iframe>
                         <i className="fas 5x fa-times-circle"></i>   
                    </li>
                        
                    
                    
                )
            })
        }
       
    }
    filesUpload(){
        return(
            <form >
                        
                <div className="form-group files">
                    <label>Upload Images / Videos </label>
                
                    <div>   
                        <input   type="file" accept='.jpg, .png, .jpeg, .mp4, .ogg, .webm, .ogv' multiple onChange={this.fileSelectedHandler} />
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
                        <span className="aa-price">${this.props.properties && this.props.properties.price? numberWithCommas(this.props.properties.price):null}</span>
                        <span className="aa-price">Bedrooms : {this.props.properties.bedrooms}</span>
                        
                        
                        
                        <p>{this.props.properties.body}</p>
                        <h4>Propery Features</h4>
                        <ul>
                            {this.propertyFeatures()}
                        </ul>

                       
                        
                        
                       
                        
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
                <div className="form-group">
                <ToastContainer />
                </div>
                    <div className="col-md-6">   
                    <h2>Add Property Images</h2> 
                        {this.renderProperty()}
                    </div>
    
                    <div className="col-md-6">
                        <h4>Property Images</h4>
                        <ul style={ulStyle}> 
                            {this.renderImages()}   
                        </ul>
                        <h4>Property Videos</h4>
                        <ul style={ulStyle}>
                            {this.renderVideos()}
                        </ul>
                            
                            {this.filesUpload()}
                        

                        
                        {/* <ul style={ulStyle}> 
                            {this.renderImages()}   
                        </ul> */}
                            
                            {/* {this.videoUpload()} */}
                        
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
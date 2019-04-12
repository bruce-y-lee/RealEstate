
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import PostPropertyForm from './PostPropertyForm';
import PostPropertyFormReview from './PostPropertyFormReview';
import PostPropertyFileUpload from './PostPropertyFileUploadForm';


class PostPropertyNew extends Component {

    
    state = { 
            showForm: true,
            showFormReview: false,
            showFileUpload: false,
            propertyId: null        
    };
    onReviewToUpload = (propertyId) =>{
        this.setState({showFormReview: false,
            showFileUpload: true,
            showForm: false,
            propertyId: propertyId   
      })
    //   console.log(this.state);
    //   console.log(propertyId);
        
    }
    onReviewToForm = () => {
        this.setState({showFormReview: false,
            showFileUpload: false,
            showForm: true
               
      })
    }
    onUploadToReview =() => {
        this.setState({showFileUpload:false,
            showForm: false,
            showFormReview: true        
        })
        console.log("upload to review");
    }
    renderHeader(){
        return(
            <section id="aa-property-header">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="aa-property-header-inner">
                        <h2>POST PROPERTY</h2>
                        <ol className="breadcrumb">
                        <li><a href="/">HOME</a></li>            
                        <li className="active"></li>
                    </ol>
                    </div>
                    </div>
                </div>
                </div>
            </section> 
        )

    }

    renderContent() {
        if(this.state.showFormReview) {
            return <PostPropertyFormReview 
                onCancel = {this.onReviewToForm.bind(this)}
                onNext = {this.onReviewToUpload.bind(this)}
            />;
        }
        if(this.state.showForm){
            return <PostPropertyForm  
            onPostPropertySubmit ={() => this.setState({showFormReview: true})}/>;
        }
        if(this.state.showFileUpload){
            return <PostPropertyFileUpload
                onUploadToReview = {this.onUploadToReview.bind(this)}
                propertyId={this.state.propertyId}
                />;
        }
        
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'postPropertyForm'
})(PostPropertyNew);
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formPropertyFields from './formPropertyFields';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';
import axios from 'axios';
                        //props.onCancel, props.formValues..
const PostPropertyFormReview = ({onCancel, formValues, history, onNext}) => {
    

    const submitForm = async () => {
        
        let res = await axios.post('/api/uploadproperty',formValues);
        // console.log(res);
        onNext(res.data._id);
    }

    const reviewFields = _.map(formPropertyFields, ({name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        
       <div className="container">
            <div className="row">
             <div className="col-md-8">
              <h2>Please confirm your entries</h2>
              <br/>
                    <div>
                    {reviewFields}
                    
                    </div>
                    
              </div>
              <div className="col-md-4">

              </div>

                
            </div>
            <button
                className="btn btn-warning btn-lg"
                onClick={onCancel}
                >
                 Back
                </button>
                <button
                    onClick={() => submitForm(formValues, history)} 
                    className ="btn btn-primary btn-lg pull-right">
                    Next
                    
                </button>
        </div>
    );
}

function mapStateToProps(state) {
    // console.log(state);
    return {
        formValues: state.form.postPropertyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(PostPropertyFormReview));
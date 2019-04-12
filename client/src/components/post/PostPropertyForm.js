//SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import PostPropertyField from './PostPropertyField';

import formPropertyFields from './formPropertyFields';
import Multiselect from 'react-widgets/lib/Multiselect';
import 'react-widgets/dist/css/react-widgets.css';




// const FIELDS = formFields;

class PostPropertyForm extends Component {
   
    maxSelectFile=(event)=>{
        let files = event.target.files // create file object
            if (files.length > 5) { 
               const msg = 'Only 5 images can be uploaded at a time'
               event.target.value = null // discard selected file
               alert(msg);
              return false;
     
          }
        return true;
     
     }
    
    

    

    renderMultiselect = ({ input,name, data, valueField, textField ,meta:{error, touched}}) =>
        <div>

            <Multiselect {...input}
                key={name}
                onBlur={() => input.onBlur()}
                value={input.value || []} // requires value to be an array
                data={data}
                valueField={valueField}
                textField={textField}
                style={{marginBottom:'5px', width:'500px',marginLeft:'30px'}}
            />
            <div className="red-text" style={{marginBottom: '20px',color:'red'}}>
                    {touched && error}
            </div>
        </div>

    renderFields() {
        return _.map(formPropertyFields, ({name,label,type,options}) => {
                 // _.map(FIELDS, field => {
            if(type==="multiSelect"){
                return(
                    <div key={name}>
                    <label style={{marginLeft:'30px'}}>{label}</label>
                    <Field
                    key={name}
                    name={name}
                    component={this.renderMultiselect}
                    data={options}/>
                    
                    
                     </div>
                )
            }
            return (
                <Field 
                    key={name}
                    component={PostPropertyField} 
                    type={type} 
                    label={label} 
                    name={name}
                    options={options}
                />
            );
            

           
            });
    }

    render() {
        return (
            <div>
                {/* <form onSubmit={this.props.handleSubmit(() => this.props.onSurveySubmit())}> */}
                <div className="container">
                    <div className="row">
                    <h2>Property Entries</h2>
                    <br/>
                     <form >
                        <div className="col-md-6">
                
                
                        {this.renderFields()}
                     
                        </div>
                        <div className="col-md-6">
                    
                             

                           
                            

                            
                       </div>

                  
                  
                        
                    </form>
                        
                    </div>
                        <Link to="/postproperty" className="btn btn-warning btn-lg">
                            Cancel
                        </Link>
                        <button type="button" className="btn btn-primary btn-lg pull-right" onClick={this.props.handleSubmit(this.props.onPostPropertySubmit)}>
                        Next 
                        </button>
                </div>
             </div>
            
            
        )
    }
}

function validate(values) {
    const errors = {};
    // if(values.recipients)
    //     var reci = values.recipients.replace(/,\s*$/, "");
    
    // errors.recipients = validateEmails(reci || '');

    // _.each(FIELDS, ({ name, noValueError }) => {
    _.each(formPropertyFields, ({ name }) => {
        if(!values[name] && name !=='unit'){
            errors[name] = 'You must provide a value'
        }
    })

    // if(!values.title){
    //     errors.title = 'You must provide a title';
    // }
    // if(!values.subject){
    //     errors.subject = 'You must provide a subject';
    // }
    // if(!values.body){
    //     errors.body = 'You must provide a body';
    // }

    

    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'postPropertyForm',
    // initialValues: { ... },
    destroyOnUnmount: false
})(PostPropertyForm);
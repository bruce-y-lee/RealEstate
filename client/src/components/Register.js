import React, {Component} from 'react';

class Register extends Component{

    render() {
        return (
            <section id="aa-signin">
            <div class="container">
            <div class="row">
                <div class="col-md-12">
                <div class="aa-signin-area">
                    <div class="aa-signin-form">
                    <div class="aa-signin-form-title">
                        <span onClick={this.props.closePopup} class="aa-property-home" title="Close Popup">Property Home</span>
                        <span onClick={this.props.closePopup} className="close" title="Close PopUp">&times;</span>
                        <h4>Create your account and Stay with us</h4>
                    </div>
                    <form class="contactform">                                                 
                        <div class="aa-single-field">
                        <label for="name">Name <span class="required">*</span></label>
                        <input type="text" required="required" aria-required="true" value="" name="name"/>
                        </div>
                        <div class="aa-single-field">
                        <label for="email">Email <span class="required">*</span></label>
                        <input type="email" required="required" aria-required="true" value="" name="email"/>
                        </div>
                        <div class="aa-single-field">
                        <label for="password">Password <span class="required">*</span></label>
                        <input type="password" name="password"/> 
                        </div>
                        <div class="aa-single-field">
                        <label for="confirm-password">Confirm Password <span class="required">*</span></label>
                        <input type="password" name="confirm-password"/> 
                        </div>
                        <div class="aa-single-submit">
                        <input type="submit" value="Create Account" name="submit"/>                    
                        </div>

                        </form>
                        <div class="aa-single-submit">
                        <input type="submit" value="Sign up with Google" name="submit"/>                    
                        </div>
                        <div class="aa-single-submit">
                        <input type="submit" value="Sign up with Facebook" name="submit"/>                    
                        </div>
                        <div class="aa-single-submit">
                        <input type="submit" value="Sign up with Instagram" name="submit"/>                    
                        </div>
                        
                    
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section> 
        );
    }
    
};


export default Register;
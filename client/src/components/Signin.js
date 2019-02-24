import React, {Component} from 'react';

class Signin extends Component{
    handleClick(){
        this.props.closePopup();
        this.props.openRegister();
    }

    render() {
        return (
            <section id="aa-signin">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="aa-signin-area">
                        <div className="aa-signin-form">
                        <div className="aa-signin-form-title">
                        <span onClick={this.props.closePopup} class="aa-property-home" title="Close Popup" >Property Home</span>
                        <span onClick={this.props.closePopup} className="close" title="Close PopUp">&times;</span>
                            <h4>Sign in to your account</h4>
                        </div>
                        <form className="contactform">                                                 
                            <div className="aa-single-field">
                            <label for="email">Email <span className="required">*</span></label>
                            <input type="email" required="required" aria-required="true" value="" name="email"/>
                            </div>
                            <div className="aa-single-field">
                            <label for="password">Password <span className="required">*</span></label>
                            <input type="password" name="password"/> 
                            </div>
                            <div className="aa-single-field">
                            <label>
                            <input type="checkbox"/> Remember me
                            </label>                                                          
                            </div> 
                            <div className="aa-single-submit">
                            <input type="submit" value="Sign In" className="aa-browse-btn" name="submit"/>  
                            </div>
                            </form>
                            <div className="aa-single-submit">
                            <input type="submit" value="Sign In with Google" className="aa-browse-btn" name="submit"/>  
                            </div>
                            <div className="aa-single-submit">
                            <input type="submit" value="Sign In with FaceBook" className="aa-browse-btn" name="submit"/>  
                            </div>
                            <div className="aa-single-submit ">
                            <input type="submit" value="Sign In with Instagram" className="aa-browse-btn" name="submit"/>  
                            </div>
                            <div class="aa-single-submit">
                            <p>Don't Have A Account Yet? <a href="#" onClick={this.handleClick.bind(this)}>CREATE NOW!</a></p>
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


export default Signin;
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
                        <span onClick={this.props.closePopup} className="aa-property-home" title="Close Popup" >Property Home</span>
                        <span onClick={this.props.closePopup} className="close" title="Close PopUp">&times;</span>
                            <h4>Sign in to your account</h4>
                        </div>
                        <form className="contactform" method="get" action="/jwt/loginUser">                                                 
                            <div className="aa-single-field">
                            <label >Email <span className="required">*</span></label>
                            <input type="email" required="required" aria-required="true"  name="email"/>
                            </div>
                            <div className="aa-single-field">
                            <label >Password <span className="required">*</span></label>
                            <input type="password" name="password"/> 
                            </div>
                            <div className="aa-single-field">
                            <label>
                            <input type="checkbox"/> Remember me
                            </label>                                                          
                            </div> 
                            <div className="aa-single-submit">
                            <input type="submit" className="aa-browse-btn" name="submit" value="Sign In"/>
                            </div>
                            </form>
                            <div className="aa-single-submit">
                            <a href="/auth/google"><input type="submit" value="Sign In with Google" className="aa-browse-btn" name="submit"/></a>
                            </div>
                            <div className="aa-single-submit">
                            <a href="/auth/facebook"><input type="submit" value="Sign In with FaceBook" className="aa-browse-btn" name="submit"/></a>  
                            </div>
                            <div className="aa-single-submit ">
                            <a href="/auth/instagram"><input type="submit" value="Sign In with Instagram" className="aa-browse-btn" name="submit"/></a>  
                            </div>
                            <div className="aa-single-submit">
                            <p>Don't Have A Account Yet? <a href="_blank" onClick={this.handleClick.bind(this)}>CREATE NOW!</a></p>
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
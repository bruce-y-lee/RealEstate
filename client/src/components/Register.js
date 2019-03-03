import React, {Component} from 'react';
import axios from 'axios';

class Register extends Component{
    state = { 
        name: '',
        email: '',
        password:'',
        confirmPassword:''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    registerUser= async ()=> {
        // console.log(this.state);
        console.log("clicked submit");
        // this.setState({
        //     name: this.refs.name.value,
        //     email:this.refs.email.value,
        //     password: this.refs.password.value,
        //     confirmPassword: this.refs.confirmPassword.value
        // })

        console.log(this.state);

        if(this.state.password === this.state.confirmPassword){
            console.log("axios post jwt registeruser")
            const res = await axios.post('/jwt/registerUser',{name:this.state.name, email: this.state.email, password: this.state.password });
            console.log(res);
            window.location= '/';
        }
        else{
            alert("Password has to match with confirm password");
        }



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
                        <span onClick={this.props.closePopup} className="aa-property-home" title="Close Popup">Property Home</span>
                        <span onClick={this.props.closePopup} className="close" title="Close PopUp">&times;</span>
                        <h4>Create your account and Stay with us</h4>
                    </div>
                    <form className="contactform">                                                 
                        <div className="aa-single-field">
                        <label >Name <span className="required">*</span></label>
                        <input type="text" required="required" aria-required="true"  name="name" 
                            onChange={e => this.handleChange(e)}
                        />
                        </div>
                        <div className="aa-single-field">
                        <label >Email <span className="required">*</span></label>
                        <input type="email" required="required" aria-required="true"  name="email" 
                            onChange={e => this.handleChange(e)}
                        />
                        </div>
                        <div className="aa-single-field">
                        <label >Password <span className="required">*</span></label>
                        <input type="password" name="password" onChange={e => this.handleChange(e)}/> 
                        </div>
                        <div className="aa-single-field">
                        <label >Confirm Password <span className="required">*</span></label>
                        <input type="password" name="confirmPassword" onChange={e => this.handleChange(e)}/> 
                        </div>
                        <div className="aa-single-submit">
                        <input type="noSubmit" onClick={this.registerUser.bind(this)} value="Create Account" name="submit"/>                    
                        </div>

                        </form>
                        <div className="aa-single-submit">
                        <input type="submit" value="Sign up with Google" name="submit"/>                    
                        </div>
                        <div className="aa-single-submit">
                        <input type="submit" value="Sign up with Facebook" name="submit"/>                    
                        </div>
                        <div className="aa-single-submit">
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
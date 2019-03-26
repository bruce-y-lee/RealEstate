import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';


class Contact extends Component {
    state={
        mailSubmitted: false
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit= async (e)=> {
        e.preventDefault();
        // preventDefault();
        this.setState({
            mailSubmitted: true
        })
        var result = await axios.get('/api/contact',{params: this.state});
        console.log(result);
    }
    contactHeader(){
        return (
            <section id="aa-property-header">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="aa-property-header-inner">
                        <h2>Contact</h2>
                        <ol className="breadcrumb">
                        <li><a href="/">HOME</a></li>            
                        <li className="active">Contact</li>
                    </ol>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
    contactForm(){
        return(
            <div className="aa-contact-bottom">
                <div className="aa-title">
                    <h2>Send Your Message</h2>
                    <span></span>
                    <p>Your email address will not be published. Required fields are marked <strong className="required">*</strong></p>
                </div>
                <div className="aa-contact-form">
                    <form className="contactform" action="/api/contact" onSubmit={this.handleSubmit.bind(this)}>                  
                    <p className="comment-form-author">
                        <label >Name <span className="required">*</span></label>
                        <input type="text" name="author"  size="30" required="required" onChange={this.onChange.bind(this)}/>
                    </p>
                    <p className="comment-form-email">
                        <label >Email <span className="required">*</span></label>
                        <input type="email" name="email"  aria-required="true" required="required" onChange={this.onChange.bind(this)}/>
                    </p>
                    <p className="comment-form-url">
                        <label >Subject</label>
                        <input type="text" name="subject" onChange={this.onChange.bind(this)}/>  
                    </p>
                    <p className="comment-form-comment">
                        <label >Message</label>
                        <textarea name="comment" cols="45" rows="8" aria-required="true" required="required" onChange={this.onChange.bind(this)}></textarea>
                    </p>                
                    <p className="form-submit">
                        <input type="submit" name="submit" className="aa-browse-btn" value="Send Message"/>
                    </p>        
                    </form>
                </div>
                </div>
        )
    }
    sentMail(){
        return(
            <div className="aa-contact-bottom">
                <div className="aa-title">
                    <h1>Sent Your Message</h1>
                    <span></span>
                    
                </div>
                
            </div>
        )
    }
    contactMain(){
        return(
            <section id="aa-contact">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="aa-contact-area">
                            <div className="aa-contact-top">
                            <div className="aa-contact-top-left">
                                <iframe width="100%" height="450" frameBorder="0" allowFullScreen="" style={{border:"0"}} title="locationMap"src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJs0-pQ_FzhlQRi_OBm-qWkbs&key=AIzaSyAf_FXuOWdjTUcby3nfonQwFZUy5Wcrqe8"></iframe>
                            </div>
                            <div className="aa-contact-top-right">
                                <h2>Contact</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae placeat aspernatur aperiam, quisquam voluptas enim tempore ab itaque nam modi eos corrupti distinctio nobis labore dolorum quae tenetur. Sapiente, sequi.</p>
                                <ul className="contact-info-list">
                                <li> <i className="fa fa-phone"></i> 1-700-564-6321</li>
                                <li> <i className="fa fa-envelope-o"></i> mimirprime@gmail.com</li>
                                <li> <i className="fa fa-map-marker"></i> Vancouver BC Canada</li>
                                </ul>
                            </div>
                            </div>
                            {this.state.mailSubmitted? this.sentMail() : this.contactForm()}
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        )
    }
    
    render() {
        
        return (
            <div>
            {this.contactHeader()}
            {this.contactMain()}
            </div>

            
            
        );
    }
    
};

// export default Header;
function mapStateToProps({auth}){
    return { auth}
}
export default connect(mapStateToProps)(Contact);

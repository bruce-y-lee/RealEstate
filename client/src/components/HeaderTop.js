import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';

import Register from './Register';
import Signin from './Signin';

class HeaderTop extends Component  {
    // constructor(props, context) {
    //     super(props, context);
        state = { 
            popupRegister: false,
            popupLogin: false
        };
    // }
    popupLoginToggle() {
        console.log("popupLogin");
        this.setState({
            popupLogin: !this.state.popupLogin
        })
        console.log(this.state.popupLogin);
    }

    popupRegisterToggle() {
        this.setState({
            popupRegister: !this.state.popupRegister
        })
        console.log(this.state.popupRegister);
    }

    renderUser() {
        // return [
        //     <button key="1" onClick={this.popupRegisterToggle.bind(this)} className="aa-register">Register</button>,
        //     <button key="2" onClick={this.popupLoginToggle.bind(this)} className="aa-login"> &nbsp;&nbsp;Login&nbsp;&nbsp; </button>
        // ]
        switch (this.props.auth){
            case null:
                return;
            case false:
                return [
                    <button key="1" onClick={this.popupRegisterToggle.bind(this)} className="aa-register">Register</button>,
                    <button key="2" onClick={this.popupLoginToggle.bind(this)} className="aa-login"> &nbsp;&nbsp;Login&nbsp;&nbsp; </button>
                ]
                
            default:
               return [
                    
                    <span key="1" style={{color: 'white'}}>{this.props.auth.name}&nbsp;&nbsp;&nbsp;&nbsp;</span>,
                    <button key="2" className="aa-login"><a href="/api/logout">Log out</a></button>
                ]
            }
                
        
    }

    render() {
        
        console.log("HeaderTop props.auth?");
        console.log(this.props.auth);
        return (
        
            <header id="aa-header">  
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="aa-header-area">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="aa-header-left">
                          <div className="aa-telephone-no">
                            <span className="fa fa-phone"></span>
                            
                          </div>
                          <div className="aa-email hidden-xs">
                            <span className="fa fa-envelope-o"></span> 
                          </div>
                        </div>              
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="aa-header-right">
                          
                          {this.renderUser()}
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {this.state.popupLogin ? 
                <Signin
                    closePopup={this.popupLoginToggle.bind(this)}
                    openRegister={this.popupRegisterToggle.bind(this)}
                />
                : null
            }
            {this.state.popupRegister ? 
                <Register
                    closePopup={this.popupRegisterToggle.bind(this)}
                />
                : null
            }
            </header>
            
        );
    }
    
};

// function mapStateToProps({auth}){
//     return { auth}
// }
// export default connect(mapStateToProps)(HeaderTop);
export default HeaderTop;
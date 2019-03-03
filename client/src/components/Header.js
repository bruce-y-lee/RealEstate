import React, {Component} from 'react';
import {connect} from 'react-redux';

import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';


class Header extends Component {
    
    
    render() {
        console.log("Header props?");
        console.log(this.props.auth)
        console.log(this.state)
        return (
            <div>
                <HeaderNav />
                <HeaderTop 
                    auth={this.props.auth}
                />
                
            </div>
            
        );
    }
    
};

// export default Header;
function mapStateToProps({auth}){
    return { auth}
}
export default connect(mapStateToProps)(Header);

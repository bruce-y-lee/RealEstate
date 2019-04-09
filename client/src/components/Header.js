import React, {Component} from 'react';
import {connect} from 'react-redux';

import HeaderTop from './HeaderTop';
import HeaderNav from './HeaderNav';


class Header extends Component {
    
    
    render() {
        
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

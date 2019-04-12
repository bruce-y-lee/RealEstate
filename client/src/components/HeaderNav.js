import React, { Component }from 'react';


class HeaderNav extends Component {
    render(){
        const { location } = window;
        //add active className on the navigation manu 
        const homeClass = location.pathname === "/" ? "active" : "";
        const propertiesClass= location.pathname.match(/^\/properties/) ? "dropdown active" : "dropdown";
        const contactClass=location.pathname.match(/^\/contact/) ? "active" : "";
        const galleryClass=location.pathname.match(/^\/gallery/) ? "active" : "";

        return (
            <section id="aa-menu-area">
            <nav className="navbar navbar-default main-navbar" role="navigation">  
            <div className="container">
                <div className="navbar-header">
                {/* <!-- FOR MOBILE VIEW COLLAPSED BUTTON --> */}
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                {/* <!-- LOGO -->                                               
                <!-- Text based logo --> */}
                <a className="navbar-brand aa-logo" href="index.html"> Home <span>Property</span></a>
                {/* <!-- Image based logo -->
                <!-- <a className="navbar-brand aa-logo-img" href="index.html"><img src="img/logo.png" alt="logo"></a> --> */}
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                <ul id="top-menu" className="nav navbar-nav navbar-right aa-main-nav">
                    <li className={homeClass}><a href="/">HOME</a></li>
                    <li className={propertiesClass}>
                    <a className="dropdown-toggle" data-toggle="dropdown" href="properties.html">PROPERTIES <span className="caret"></span></a>
                    <ul className="dropdown-menu" role="menu">                
                        <li><a href="/properties">PROPERTIES</a></li>
                        <li><a href="/properties">PROPERTIES DETAIL</a></li>                                            
                    </ul>
                    </li>
                    <li className={galleryClass}><a href="gallery.html">GALLERY</a></li>                                         
                   
                    <li className={contactClass}><a href="/contact">CONTACT</a></li>
                <li><a href="/postproperty">POST PROPERTY</a></li>
                </ul>                            
                </div>
                {/* <!--/.nav-collapse -->        */}
            </div>          
            </nav> 
        </section>
          
            
        );
    }
        
    
    
};

export default HeaderNav;

import React from 'react';

const footer = () => {
    return(
        <footer id="aa-footer">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="aa-footer-area">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aa-footer-left">
                    
                    <p>Implemented by Bruce y Lee</p>
                    <p>Designed by <a rel="nofollow" href="http://www.markups.io/">MarkUps.io</a></p>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aa-footer-middle">
                        <a href="/" onClick={(e) => {e.preventDefault(); }}><i className="fab fa-facebook"></i></a>
                        <a href="/" onClick={(e) => {e.preventDefault(); }}><i className="fab fa-twitter"></i></a>
                        <a href="/" onClick={(e) => {e.preventDefault(); }}><i className="fab fa-google-plus"></i></a>
                        <a href="/" onClick={(e) => {e.preventDefault(); }}><i className="fab fa-youtube"></i></a>
                    </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="aa-footer-right">
                        <a href="/">Home</a>
                        <a href="/" onClick={(e) => {e.preventDefault(); }}>Support</a>
                        <a href="/" onClick={(e) => {e.preventDefault(); }}>License</a>
                        <a href="/" onClick={(e) => {e.preventDefault(); }}>FAQ</a>
                        <a href="/" onClick={(e) => {e.preventDefault(); }}>Privacy & Term</a>
                    </div>
                    </div>            
                </div>
                </div>
            </div>
            </div>
            </div>
        </footer>
    )
} 

export default footer;
import React from 'react';

const ourService = () =>{
    return (
        <section id="aa-service">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="aa-service-area">
                    <div className="aa-title">
                    <h2>Our Service</h2>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit ea nobis quae vero voluptatibus.</p>
                    </div>
                    
                    <div className="aa-service-content">
                    <div className="row">
                        <div className="col-md-3">
                        <div className="aa-single-service">
                            <div className="aa-service-icon">
                            <span className="fa fa-home"></span>
                            </div>
                            <div className="aa-single-service-content">
                            <h4><a href="_blank" onClick={(e) => {e.preventDefault(); }}>Property Sale</a></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="aa-single-service">
                            <div className="aa-service-icon">
                            <span className="fa fa-check"></span>
                            </div>
                            <div className="aa-single-service-content">
                            <h4><a href="_blank" onClick={(e) => {e.preventDefault(); }}>Property Rent</a></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="aa-single-service">
                            <div className="aa-service-icon">
                            <span className="fa fa-crosshairs"></span>
                            </div>
                            <div className="aa-single-service-content">
                            <h4><a href="_blank" onClick={(e) => {e.preventDefault(); }}>Property Development</a></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="aa-single-service">
                            <div className="aa-service-icon">
                            <span className="fa fa-bar-chart-o"></span>
                            </div>
                            <div className="aa-single-service-content">
                            <h4><a href="_blank" onClick={(e) => {e.preventDefault(); }}>Market Analysis</a></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto repellendus quasi asperiores itaque dolorem at.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )

}

export default ourService;
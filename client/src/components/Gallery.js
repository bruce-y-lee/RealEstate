import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import axios from 'axios';
import _ from 'lodash';

var imgData =[
    {title:"apartment", img:"1.jpg"},
    {title:"garage", img:"2.jpg"},
    {title:"livingroom", img:"3.jpg"},
    {title:"bedroom", img:"4.jpg"},
    {title:"apartment", img:"5.jpg"},
    {title:"livingroom", img:"6.jpg"},
    {title:"apartment", img:"7.jpg"},
    {title:"garage", img:"8.jpg"},
    {title:"livingroom", img:"9.jpg"},
    {title:"bedroom", img:"10.jpg"},
    {title:"kitchen", img:"11.jpg"},
    {title:"livingroom", img:"12.jpg"}
]
var istyle={
    "display":"inline-block"
}
class Gallery extends Component {
    
    galleryHeader(){
        return (
            <section id="aa-property-header">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="aa-property-header-inner">
                        <h2>Gallery</h2>
                        <ol className="breadcrumb">
                        <li><a href="/">HOME</a></li>            
                        <li className="active">Gallery</li>
                    </ol>
                    </div>
                    </div>
                </div>
                </div>
            </section> 
        )
    }
    
    renderImage(){
        return _.map(imgData, image=>{
            return(
                <div className={`aa-single-gallery mix ${image.title}`} style={istyle}key={`gallery iamge ${image.img}`}>                  
                      <div className="aa-single-gallery-item">
                        <div className="aa-single-gallery-img">
                          <a href="#"><img src={`img/gallery/small/${image.img}`} alt="img"/></a>
                        </div>
                        <div className="aa-single-gallery-info">
                          <a className="fancybox" data-fancybox-group="gallery" href={`img/gallery/big/${image.img}`}><span className="fa fa-eye"></span></a>
                          <a className="aa-link" href="#"><span className="fa fa-link"></span></a>
                        </div>                  
                      </div>
                </div>
            )
        })

        // return(
        //     <div><img src="img/gallery/small/1.jpg" alt="img"/>
        //         <div class="aa-single-gallery mix apartment">                  
        //         <div class="aa-single-gallery-item">
        //         <div class="aa-single-gallery-img">
        //             <a href="#"><img src="img/gallery/small/1.jpg" alt="img"/></a>
        //         </div>
        //         <div class="aa-single-gallery-info">
        //             <a class="fancybox" data-fancybox-group="gallery" href="img/gallery/big/1.jpg"><span class="fa fa-eye"></span></a>
        //             <a class="aa-link" href="#"><span class="fa fa-link"></span></a>
        //         </div>                  
        //         </div>
        //     </div>
        //     {/* <!-- start single gallery image --> */}
        //     <div class="aa-single-gallery mix garage">                  
        //         <div class="aa-single-gallery-item">
        //         <div class="aa-single-gallery-img">
        //             <a href="#"><img src="img/gallery/small/2.jpg" alt="img"/></a>
        //         </div>
        //         <div class="aa-single-gallery-info">
        //             <a class="fancybox" data-fancybox-group="gallery" href="img/gallery/big/2.jpg"><span class="fa fa-eye"></span></a>
        //             <a class="aa-link" href="#"><span class="fa fa-link"></span></a>
        //         </div>                  

        //         </div>
        //     </div>
        //     {/* <!-- start single gallery image --> */}
        //     <div class="aa-single-gallery mix livingroom">                  
        //         <div class="aa-single-gallery-item">
        //         <div class="aa-single-gallery-img">
        //             <a href="#"><img src="img/gallery/small/3.jpg" alt="img"/></a>
        //         </div>
        //         <div class="aa-single-gallery-info">
        //             <a class="fancybox" data-fancybox-group="gallery" href="img/gallery/big/3.jpg"><span class="fa fa-eye"></span></a>
        //             <a class="aa-link" href="#"><span class="fa fa-link"></span></a>
        //         </div>
        //         </div>
        //     </div>
        //     {/* <!-- start single gallery image --> */}
        //     <div class="aa-single-gallery mix bedroom">                  
        //         <div class="aa-single-gallery-item">
        //         <div class="aa-single-gallery-img">
        //             <a href="#"><img src="img/gallery/small/4.jpg" alt="img"/></a>
        //         </div>
        //         <div class="aa-single-gallery-info">
        //             <a class="fancybox" data-fancybox-group="gallery" href="img/gallery/big/4.jpg"><span class="fa fa-eye"></span></a>
        //             <a class="aa-link" href="#"><span class="fa fa-link"></span></a>
        //         </div>
        //         </div>
        //     </div>
        //     {/* <!-- start single gallery image --> */}
        //     <div class="aa-single-gallery mix apartment">                  
        //         <div class="aa-single-gallery-item">
        //         <div class="aa-single-gallery-img">
        //             <a href="#"><img src="img/gallery/small/5.jpg" alt="img"/></a>
        //         </div>
        //         <div class="aa-single-gallery-info">
        //             <a class="fancybox" data-fancybox-group="gallery" href="img/gallery/big/5.jpg"><span class="fa fa-eye"></span></a>
        //             <a class="aa-link" href="#"><span class="fa fa-link"></span></a>
        //         </div>
        //         </div>
        //     </div>
        //     {/* <!-- start single gallery image --> */}
        //     <div class="aa-single-gallery mix livingroom">                  
        //         <div class="aa-single-gallery-item">
        //         <div class="aa-single-gallery-img">
        //             <a href="#"><img src="img/gallery/small/6.jpg" alt="img"/></a>
        //         </div>
        //         <div class="aa-single-gallery-info">
        //             <a class="fancybox" data-fancybox-group="gallery" href="img/gallery/big/6.jpg"><span class="fa fa-eye"></span></a>
        //             <a class="aa-link" href="#"><span class="fa fa-link"></span></a>
        //         </div>
        //         </div>
        //     </div>
        //     {/* <!-- start single gallery image --> */}
        //     <div class="aa-single-gallery mix apartment">                  
        //         <div class="aa-single-gallery-item">
        //         <div class="aa-single-gallery-img">
        //             <a href="#"><img src="img/gallery/small/7.jpg" alt="img"/></a>
        //         </div>
        //         <div class="aa-single-gallery-info">
        //             <a class="fancybox" data-fancybox-group="gallery" href="img/gallery/big/7.jpg"><span class="fa fa-eye"></span></a>
        //             <a class="aa-link" href="#"><span class="fa fa-link"></span></a>
        //         </div>                  
        //         </div>
        //     </div>
        //     {/* <!-- start single gallery image --> */}
        //     <div class="aa-single-gallery mix garage">                  
        //         <div class="aa-single-gallery-item">
        //         <div class="aa-single-gallery-img">
        //             <a href="#"><img src="img/gallery/small/8.jpg" alt="img"/></a>
        //         </div>
        //         <div class="aa-single-gallery-info">
        //             <a class="fancybox" data-fancybox-group="gallery" href="img/gallery/big/8.jpg"><span class="fa fa-eye"></span></a>
        //             <a class="aa-link" href="#"><span class="fa fa-link"></span></a>
        //         </div>                  

        //         </div>
        //     </div>
        //     {/* <!-- start single gallery image --> */}
        //     <div class="aa-single-gallery mix livingroom">                  
        //         <div class="aa-single-gallery-item">
        //         <div class="aa-single-gallery-img">
        //             <a href="#"><img src="img/gallery/small/9.jpg" alt="img"/></a>
        //         </div>
        //         <div class="aa-single-gallery-info">
        //             <a class="fancybox" data-fancybox-group="gallery" href="img/gallery/big/9.jpg"><span class="fa fa-eye"></span></a>
        //             <a class="aa-link" href="#"><span class="fa fa-link"></span></a>
        //         </div>
        //         </div>
        //     </div>
        //     {/* <!-- start single gallery image --> */}
        //     <div class="aa-single-gallery mix bedroom">                  
        //         <div class="aa-single-gallery-item">
        //         <div class="aa-single-gallery-img">
        //             <a href="#"><img src="img/gallery/small/10.jpg" alt="img"/></a>
        //         </div>
        //         <div class="aa-single-gallery-info">
        //             <a class="fancybox" data-fancybox-group="gallery" href="img/gallery/big/10.jpg"><span class="fa fa-eye"></span></a>
        //             <a class="aa-link" href="#"><span class="fa fa-link"></span></a>
        //         </div>
        //         </div>
        //     </div>
        //     {/* <!-- start single gallery image --> */}
        //     <div class="aa-single-gallery mix kitchen">                  
        //         <div class="aa-single-gallery-item">
        //         <div class="aa-single-gallery-img">
        //             <a href="#"><img src="img/gallery/small/11.jpg" alt="img"/></a>
        //         </div>
        //         <div class="aa-single-gallery-info">
        //             <a class="fancybox" data-fancybox-group="gallery" href="img/gallery/big/11.jpg"><span class="fa fa-eye"></span></a>
        //             <a class="aa-link" href="#"><span class="fa fa-link"></span></a>
        //         </div>
        //         </div>
        //     </div>
        //     {/* <!-- start single gallery image --> */}
        //     <div class="aa-single-gallery mix livingroom">                  
        //         <div class="aa-single-gallery-item">
        //         <div class="aa-single-gallery-img">
        //             <a href="#"><img src="img/gallery/small/12.jpg" alt="img"/></a>
        //         </div>
        //         <div class="aa-single-gallery-info">
        //             <a class="fancybox" data-fancybox-group="gallery" href="img/gallery/big/12.jpg"><span class="fa fa-eye"></span></a>
        //             <a class="aa-link" href="#"><span class="fa fa-link"></span></a>
        //         </div>
        //         </div>
        //     </div>
        // </div>
        // )
        

    }
    
    galleryMain(){
        return(
            <section id="aa-gallery">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="aa-gallery-area">
                        <div className="aa-title">
                        <h2>Gallery View</h2>
                        <span></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi commodi eum dolorem aut eos, debitis quaerat reiciendis, officiis consectetur ducimus atque suscipit ab at tempora!</p>
                        </div>
                        {/* <!-- Start gallery --> */}
                        <div className="aa-gallery-content">
                        <div className="aa-gallery-top">
                            {/* <!-- Start gallery menu --> */}
                            <ul>
                            <li data-filter="all" className="filter active">All</li>
                            <li data-filter=".apartment" className="filter">Apartment</li>
                            <li data-filter=".livingroom" className="filter">Living Room</li>
                            <li data-filter=".bedroom" className="filter">Bedroom</li>
                            <li data-filter=".kitchen" className="filter">Kitchen</li>
                            <li data-filter=".garage" className="filter">Garage</li>
                            </ul>
                        </div>
                        {/* <!-- Start gallery image --> */}
                        <div id="mixit-container" className="aa-gallery-body">
                            {this.renderImage()}
                        </div>
                        </div>
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
            {this.galleryHeader()}
            {this.galleryMain()}
            </div>

            
            
        );
    }
    
};

export default Gallery;


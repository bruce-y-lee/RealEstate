import React ,{ Component } from 'react';
import _ from 'lodash';
import Pagenation from './Pagenation';

import PopularProperties from './PopularProperties';
import numberWithCommas from '../../utils/numberWithCommas';
import axios from 'axios';



const pStyle = {
    backgroundColor: '#b57de0',
    // margin: '0px 50px',
    float: 'right'
  };
class Properties extends Component {
    state={
        // pageNumber: Math.ceil(this.props.data.length/10)
        selectedPage:null
    }

    handleDetail = (e)=> {
        if(this.props.detail){
            e.preventDefault();
        // this.props.detail(e.target);
        // console.log(e.target.getAttribute('value'));
        this.props.detail(e.target.getAttribute('value'));
        }
        
    }
    handleRemove= async (e)=>{
        e.preventDefault();

        let result = await axios.patch('/api/mylist',{propertyId:e.target.getAttribute('value'), userId:this.props.auth._id})
        console.log(result);
        console.log("remove")
        window.location.reload();
        // console.log(this.props.auth);
        // console.log(e.target.getAttribute('value'));


    }
    handlePage(number){
        // console.log(number);
        this.setState({
            selectedPage: number
        })
    }
    // handleSearch = () => {
    //     this.props.search();
    // }
    renderSaleTag = (type)=>{
        if(type==='for-rent'){
            return "For Rent"
        }else if (type ==='for-sale'){
            return "For Sale"
        }else{
            return "Sold Out"
        }

    }
    renderPropeerties = (dataArg) => {
        let data;
        // console.log(this.state.selectedPage);
        if(this.state.selectedPage && this.state.selectedPage > 1)
            data = dataArg.slice((this.state.selectedPage-1)*10,this.state.selectedPage*10);
        else
            data = dataArg.slice(0,10);
        
        return _.map(data, (property) => {
            // const rand = parseInt(min + Math.random() * (max - min));
            // console.log(rand);
            let imgSrc = property.imageSource? property.imageSource:'img/item/';
            return (
                <li key={property._id}>
                  <article className="aa-properties-item">
                    <a className="aa-properties-item-img" href={`/properties/${property._id}` }>
                      {/* <img alt="img" src={`img/item/${property.images[0]}`}/> */}
                      <img alt="img" src={imgSrc+property.images[0]}/>

                    </a>
                    <div className={`aa-tag ${property.saleType}`}>
                    {this.renderSaleTag(property.saleType)}
                    </div>
                    <div className="aa-properties-item-content">
                      <div className="aa-properties-info">
                        <span>{property.bedrooms} Rooms</span>
                        
                        <span>{property.bathrooms} Baths</span>
                        <span>{property.sq} SQ FT</span>
                        <span>{property.address.city}</span>
                      </div>
                      <div className="aa-properties-about">
                        <h3><a href={`/properties/${property._id}` }>{property.title}</a></h3>
                        <p>{property.body}</p>                      
                      </div>
                      <div className="aa-properties-detial">
                        <span className="aa-price">
                          ${numberWithCommas(property.price)}
                        </span>
                        
                        <a className="aa-secondary-btn" href={`/properties/${property._id}` } value={property._id} onClick={this.handleDetail}>View Details</a>
                        {window.location.pathname.match(/^\/mylist/) && this.props.auth? <button className="aa-secondary-btn" value={property._id}style={pStyle} onClick={this.handleRemove}> Remove from My List</button>: null }
                      </div>
                    </div>
                  </article>
                </li>
                
            );
        });
    }
    propertyContent(){
        return(
            <div className="col-md-8">
                    <div className="aa-properties-content">
                    {/* <!-- start properties content head --> */}
                        <div className="aa-properties-content-head">              
                        <div className="aa-properties-content-head-left">
                            <form action="" className="aa-sort-form">
                            <label >Sort by</label>
                            <select name="">
                                <option value="1">Default</option>
                                <option value="2">Name</option>
                                <option value="3">Price</option>
                                <option value="4">Date</option>
                            </select>
                            </form>
                            <form action="" className="aa-show-form">
                            <label >Show</label>
                            <select name="">
                                <option value="1">10</option>
                                <option value="2">20</option>
                                <option value="3">30</option>
                            </select>
                            </form>
                        </div>
                        <div className="aa-properties-content-head-right">
                            <a id="aa-grid-properties" href="_blank" onClick={(e)=>e.preventDefault()}><span className="fa fa-th"></span></a>
                            <a id="aa-list-properties" href="_blank" onClick={(e)=>e.preventDefault()}><span className="fa fa-list"></span></a>
                        </div>            
                        </div>
                        {/* <!-- Start properties content body --> */}
                        <div className="aa-properties-content-body">
                        <ul className="aa-properties-nav">
                            {this.renderPropeerties(this.props.data)}
    
                        </ul>
                        </div>
                        
                        <Pagenation
                            pageNumber = {Math.ceil(this.props.data.length/10)}
                            handlePage = {this.handlePage.bind(this)}
                            />
                    </div>
                    </div>
                    
        )
    }
    render(){
        // console.log(this.props.data);
        if(window.location.pathname ==='/'){
            return (
                <section id="aa-properties">
                    <div className="container">
                    <div className="row">
                        {this.propertyContent()}
                        {/* <AdvanceSearch/> */}
                        <div className="col-md-4">
                        <aside className="aa-properties-sidebar">
                        <PopularProperties />
                        </aside>
                        </div>
                        </div>
    
                    </div>
                </section>
            )    
        }
        return(
            
            <div>
                        {this.propertyContent()}
            </div>        
            
                        
            
            
        )
        

    }
}


export default Properties;    

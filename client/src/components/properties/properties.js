import React ,{ Component } from 'react';
import _ from 'lodash';
import Pagenation from './Pagenation';




class Properties extends Component {
    state={
        // pageNumber: Math.ceil(this.props.data.length/10)
        selectedPage:null
    }

    handleDetail = (e)=> {
        if(this.props.detail){
            e.preventDefault();
        // this.props.detail(e.target);
        console.log(e.target.getAttribute('value'));
        this.props.detail(e.target.getAttribute('value'));
        }
        
    }
    handlePage(number){
        console.log(number);
        this.setState({
            selectedPage: number
        })
    }
    // componentDidUpdate(){
        // console.log(this.props.data.length);
        // console.log(Math.ceil(11/10));
        // this.setState({
        //     pageNumber: Math.ceil(this.props.data.length/10)
        // })
        // if(this.props.data.length > 10){
        //     for(let i =1; i<this.props.data.length;i=i+10){
        //         if(i>10){
        //             this.setState({
        //                 pageNumber: [...this.state.pageNumber, parseInt(i/10)]
        //             })
        //         }
        //         else{
        //             this.setState({
        //             pageNumber: [...this.state.pageNumber, i]
        //             })
        //         }      
        //     }

            
        // }
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
            return (
                <li key={property._id}>
                  <article className="aa-properties-item">
                    <a className="aa-properties-item-img" href={`/properties/${property._id}` }>
                      <img alt="img" src={`img/item/${property.images[0]}`}/>
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
                          ${property.price}
                        </span>
                        <a className="aa-secondary-btn" href={`/properties/${property._id}` } value={property._id} onClick={this.handleDetail}>View Details</a>
                      </div>
                    </div>
                  </article>
                </li>
                
            );
        });
    }
    render(){
        // console.log(this.props.data);
        
        return (
            <section id="aa-properties">
                <div className="container">
                <div className="row">
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
                </div>
                </div>
            </section>
        )

    }
}


export default Properties;    

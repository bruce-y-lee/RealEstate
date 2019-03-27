import React, {Component} from 'react';


import _ from 'lodash';
// import {connect} from 'react-redux';

// import HeaderTop from './HeaderTop';
// import HeaderNav from './HeaderNav';
import selectionField from './selectionField';
// import selectGenerate from './selectGenerate';
import Properties from './properties';

import axios from 'axios';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import PopularProperties from './PopularProperties';

const Range = Slider.Range;


const style = { width: 400, margin: 10 };
const style3 = { width: 500, margin: 10 };
const style2 = { width: 300, margin: 10 };




// import { fetchPropertiesSearched } from '../../actions';
// var selectionField = [{
//     label: "Location", list :  ["Location","Vancouver", "Burnaby", "Surrey", "North Vancouver", "West Vancouver", 
//             "Richmond", "Langley", "Coquitlam", "Delta"]},
//     {label: "PropertyType", list: ["Property Type","apartment", "condominium", "house"]},
//     {label: "Bedrooms", list: ["Bedrooms Min",1,2,3,4,5,6,7]},
//     {label: "Bathrooms", list: ["Bathrooms Min",1,2,3,4,5]}
// ]

// const wrapperStyle = { width: 700, margin: 50 };
class AdvanceSearch extends Component {
    state = {
        showSearchedList: false,
        
        value1:[1000, 2000],
        value2:[1000000,3000000]

    }

    handleChange = (e) => {
        console.log(this.state);
        this.setState({
            [e.target.name]:e.target.value
        })
        this.setState({
            areaMin: this.refs.areaMin.textContent,
            areaMax: this.refs.areaMax.textContent,
            priceMin: this.refs.priceMin.textContent,
            priceMax: this.refs.priceMax.textContent

        })
        // console.log("advance search select location");
    }

    handleOnChange = (value) => {
        this.setState({
          value1: value
        })
        // console.log(this.state.value)
      }
    handleOnChange2 = (value) => {
    this.setState({
        value2: value
    })
    // console.log(this.state.value2)
    }
    numberWithCommas= (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    handleSubmit = async (e) => {
        // let aa = document.getElementById("skip-value-lower").value;
        e.preventDefault();
        // console.log(aa);
        
        const res = await axios.post('/api/properties',this.state);
        // fetchPropertiesSearched(this.state);
        console.log(res);
        this.setState({
            propertyData: res.data,
            showSearchedList: true
        });
        // console.log(this.state);
        
        if(this.props.search)
            this.props.search()
        
    }

    optionGenerate = (list)=> {
        return _.map(list, (item) => {
            
            return (
                <option
                    key={item}
                    
                    value={item}
                >{item}</option>
            );
        });
    }
    selectGenerate ({label, list}) {
        
            return (
                <select 
                    onChange = {e => this.handleChange(e)}
                    name={label}
                    key={label}
                >
                {this.optionGenerate(list)}
                </select>
            );
    
}
    searchRender(pathName) {
        // let { value } = this.state
        // let value={ start: 20, end: 80 }
        // pathName=='/'? "aa":"bb";
        return(
            <div>
              {pathName==='/'? <section id="aa-advance-search">
              <div className="container">
              <div className="aa-advance-search-area">
                  <div className="form">
                  <div className="aa-advance-search-top"> 
                          <form onSubmit={this.handleSubmit.bind(this)} >
                          <div className="row">
                          <div className="col-md-4">
                              <div className="aa-single-advance-search">
                              {this.selectGenerate(selectionField[0])}
                              </div>
                          </div>
                          <div className="col-md-2">
                              <div className="aa-single-advance-search">
                              {this.selectGenerate(selectionField[1])}
                              </div>
                          </div>
                          <div className="col-md-2">
                              <div className="aa-single-advance-search">
                              {this.selectGenerate(selectionField[2])}
                          </div>
                          </div>
                          <div className="col-md-2">
                              <div className="aa-single-advance-search">
                              {this.selectGenerate(selectionField[3])}
                          </div>
                          </div>
                          <div className="col-md-2">
                              <div className="aa-single-advance-search">
                              <input className="aa-search-btn" type="submit"  value="Search"/>
                              </div>
                          </div>
                          </div>
                      </form>
                      </div>
                      <div className="aa-advance-search-bottom">
                      <div className="row">
                          <div className="col-md-6">
                          <div className="aa-single-filter-search">
                              <span>AREA (SQ)</span>
                              <span>FROM</span>
                              <span id="skip-value-lower" className="example-val"  ref="areaMin" >{this.state.value1[0]}</span>
                              <span>TO</span>
                              <span id="skip-value-upper" className="example-val"  ref="areaMax" >{this.state.value1[1]}</span>
                              {/* <div id="aa-sqrfeet-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                              </div>  */}
                              <div style={style}>
      
                                <Range min={500} max={3000} allowCross={false} defaultValue={[1000, 2000]} onChange={this.handleOnChange} />
                              </div>  
                          </div>
                          </div>
                          <div className="col-md-6">
                          <div className="aa-single-filter-search">
                              <span>PRICE ($)</span>
                              <span>FROM</span>
                              <span id="skip-value-lower2" className="example-val" ref="priceMin" >{this.numberWithCommas(this.state.value2[0])}</span>
                              <span>TO</span>
                              <span id="skip-value-upper2" className="example-val" ref="priceMax" >{this.numberWithCommas(this.state.value2[1])}</span>
                              
                              <div style={style}>
       
                               <Range min={500000} max={5000000} allowCross={false} defaultValue={[1000000, 3000000]} onChange={this.handleOnChange2} />
                               </div> 
                          </div>
  
                          </div>  
                      </div>  
                      </div>
                      </div>
                  </div>
                  </div>
                 
  
                  
              </section>:
            <div className="col-md-4">
            <aside className="aa-properties-sidebar">
           
              <div className="aa-properties-single-sidebar">
                <h3>Properties Search</h3>
                <form onSubmit={this.handleSubmit.bind(this)} >
                  <div className="aa-single-advance-search">
                  {this.selectGenerate(selectionField[0])}
                  </div>
                  <div className="aa-single-advance-search">
                  {this.selectGenerate(selectionField[1])}
                  </div>
                  <div className="aa-single-advance-search">
                  {this.selectGenerate(selectionField[2])}
                  </div>
                  <div className="aa-single-advance-search">
                  {this.selectGenerate(selectionField[3])}
                  </div>
                  <div className="aa-single-filter-search">
                    <span>AREA (SQ)</span>
                    <span>FROM</span>
                    <span id="skip-value-lower" className="example-val"  ref="areaMin" >{this.state.value1[0]}</span>
                    <span>TO</span>
                    <span id="skip-value-upper" className="example-val"  ref="areaMax" >{this.state.value1[1]}</span>
                    <div style={style2}>
                        <Range min={500} max={3000} allowCross={false} defaultValue={[1000, 2000]} onChange={this.handleOnChange} />
                    </div>                  
                  </div>
                  <div className="aa-single-filter-search">
                    <span>PRICE ($)</span>
                    <span>FROM</span>
                    <span id="skip-value-lower2" className="example-val" ref="priceMin" >{this.numberWithCommas(this.state.value2[0])}</span>
                    <span>TO</span>
                    <span id="skip-value-upper2" className="example-val" ref="priceMax" >{this.numberWithCommas(this.state.value2[1])}</span>                    
                    <div style={style2}>
                    <Range min={500000} max={5000000} allowCross={false} defaultValue={[1000000, 3000000]} onChange={this.handleOnChange2} />
                    </div>     
                  </div>
                  <div className="aa-single-advance-search">
                    <input type="submit" value="Search" className="aa-search-btn"/>
                    
                  </div>
                </form>
              </div> 
              
              <PopularProperties />
            </aside>
          </div> }  
              </div>
            

        )
    }
    render() {
        // console.log("Header props?");
        // console.log(this.props.auth)
        // console.log(this.state)
        let {location} = window;
         console.log(location.pathname)
        return (
            <div>
                {this.searchRender(location.pathname)}
                {/* {this.state.showSearchedList? <Properties data={this.state.propertyData}/>: null} */}
                {/* {this.state.propertyData} */}
                {this.state.propertyData ? <Properties
                                            data={this.state.propertyData}/>:null}
            </div>
            
        );
    }
    
};

// export default Header;
// function mapStateToProps({auth}){
//     return { auth}
// }
export default AdvanceSearch;

import React, {Component} from 'react';
// import {connect} from 'react-redux';

// import HeaderTop from './HeaderTop';
// import HeaderNav from './HeaderNav';


class AdvanceSearch extends Component {
    state = {
        Location:'',
        Category:''
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
        console.log("advance search select location");
    }
    handleSubmit = () => {
        // let aa = document.getElementById("skip-value-lower").value;
        
        // console.log(aa);
        console.log(this.state);
    }
    
    render() {
        // console.log("Header props?");
        // console.log(this.props.auth)
        // console.log(this.state)
        return (
            <section id="aa-advance-search">
                <div className="container">
                <div className="aa-advance-search-area">
                    <div className="form">
                    <div className="aa-advance-search-top">
                        <div className="row">
                        <div className="col-md-4">
                            <div className="aa-single-advance-search">
                            <select onChange={e => this.handleChange(e)} name="Location">
                            <option value="Location"  >Location</option>
                                <option value="Flat">Flat</option>
                                <option value="Land">Land</option>
                                <option value="Plot">Plot</option>
                                <option value="Commercial">Commercial</option>
                            </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="aa-single-advance-search">
                            <select onChange={e => this.handleChange(e)} name="Category">
                            <option value="0" >Category</option>
                                <option value="1">Flat</option>
                                <option value="2">Land</option>
                                <option value="3">Plot</option>
                                <option value="4">Commercial</option>
                            </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="aa-single-advance-search">
                            <select>
                                <option value="0" >Type</option>
                                <option value="1">Flat</option>
                                <option value="2">Land</option>
                                <option value="3">Plot</option>
                                <option value="4">Commercial</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-md-2">
                            <div className="aa-single-advance-search">
                            <select>
                                <option value="0" >Type</option>
                                <option value="1">Flat</option>
                                <option value="2">Land</option>
                                <option value="3">Plot</option>
                                <option value="4">Commercial</option>
                            </select>
                        </div>
                        </div>
                        <div className="col-md-2">
                            <div className="aa-single-advance-search">
                            <input className="aa-search-btn" type="submit" onClick={this.handleSubmit.bind(this)} value="Search"/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="aa-advance-search-bottom">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="aa-single-filter-search">
                            <span>AREA (SQ)</span>
                            <span>FROM</span>
                            <span id="skip-value-lower" className="example-val"  ref="areaMin">50.00</span>
                            <span>TO</span>
                            <span id="skip-value-upper" className="example-val"  ref="areaMax">100.00</span>
                            <div id="aa-sqrfeet-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                            </div>                  
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="aa-single-filter-search">
                            <span>PRICE ($M)</span>
                            <span>FROM</span>
                            <span id="skip-value-lower2" className="example-val" ref="priceMin">30.00</span>
                            <span>TO</span>
                            <span id="skip-value-upper2" className="example-val" ref="priceMax">100.00</span>
                            <div id="aa-price-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background">
                            </div>      
                        </div>
                        </div>
                    </div>  
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
        );
    }
    
};

// export default Header;
// function mapStateToProps({auth}){
//     return { auth}
// }
export default AdvanceSearch;

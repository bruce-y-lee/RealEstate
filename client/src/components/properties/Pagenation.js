import React, {Component} from 'react';
// import _ from 'lodash';


// const RenderItem = (props) => {
//     return(
//       <ul>
//       {props.map((item,i) => 
//         <li key={i}><a>{item}</a></li>
//       )}
//       </ul>
//     ) 
//   };

class Pagenation extends Component{
    state={
        selected: 1
    }

    // componentDidMount(){
    //     console.log(this.state)
    //     this.props.pageNumber.map(item=>{
    //         this.setState({selected : ${item}:false})
    //     })
    //     console.log(this.state)
    // }

    handleClick (e) {
        e.preventDefault();
        console.log("pagenation",e.target.getAttribute("value"));
        console.log(this.state.selected);
        this.setState({
            selected: e.target.getAttribute("value")
        })
        this.props.handlePage(e.target.getAttribute("value"));
        
        
    }
    handlePrevious(e){
        console.log(this.state.selected)
        e.preventDefault();
        if(this.state.selected>1){
            this.setState({
                selected: this.state.selected - 1
            })
        }
        console.log(this.state.selected)
        this.props.handlePage(this.state.selected);
    }
    handleNext(e){
        console.log(this.state.selected)
        e.preventDefault();
        if(this.state.selected < this.props.pageNumber){
            this.setState({
                selected: this.state.selected + 1
            })
        }
        console.log(this.state.selected)
        this.props.handlePage(this.state.selected);
    }
    renderItem = (props) => {
        // console.log(props.items.length);

        let list = []
        for(let i=1;i<=props.items;i++){
            list.push(<li key={i} className={this.state.selected == i? "active":null}><a onClick={this.handleClick.bind(this)} value={i}>{i}</a></li>)
        }
        // console.log(list);
        return(
            <ul className="pagination">
              <li>
                    <a href="#" aria-label="Previous" onClick={this.handlePrevious.bind(this)}>
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                    {/* {props.items.map((item,i) => 
                        <li key={i} className={this.state.selected == item? "active":null}><a onClick={this.handleClick.bind(this)} value={item}>{item}</a></li>
                    )} */}
                    {list}
                <li>
                    <a href="#" aria-label="Next" onClick={this.handleNext.bind(this)}>
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
                
          </ul>
        ) 
      };

    render(){
        // console.log(this.props.pageNumber);
        return(
            <div className="aa-properties-content-bottom">
              <nav>
                
                  {this.props.pageNumber > 1?<this.renderItem items={this.props.pageNumber} />
                  :null
                  }
                  
                 
              </nav>
            </div>
        
        ) 
    }
}

export default Pagenation;

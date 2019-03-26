import React from 'react';
import _ from 'lodash';

const agentList = [
    {title: "Top Agent", name: "Philip Smith"},
    {title: "Expert Agent", name: "Adam Barney"},
    {title: "Director" ,name: "Paul Walker"},
    {title: "Jr. Agent" ,name: "John Smith"},
    {title: "Top Agent" ,name: "William Joe"},
    {title: "Expert Agent" ,name: "Jeremy Scott"},
    {title: "Director" ,name: "Maria Dough"},
    {title: "Jr. Agent" ,name: "Kevin Snider"}
]


const renderAgent = ()=>{  
    var counter =0;
    return _.map(agentList, (agent)=>{
        counter++;
        // console.log(counter);
        return(
            <li key={counter}>
                <div className="aa-single-agents">
                    <div className="aa-agents-img">
                    <img src={`img/agents/agent-${counter}.jpg`} alt={`agent member ${counter}`}/>
                    </div>
                    <div className="aa-agetns-info">
                    <h4><a href="_blank" onClick={(e) => {e.preventDefault(); }}>{agent.name}</a></h4>
                    <span>{agent.title}</span>
                    <div className="aa-agent-social">
                        <a href="_blank" onClick={(e) => {e.preventDefault(); }}><i className="fab fa-facebook"></i></a>
                        <a href="_blank" onClick={(e) => {e.preventDefault(); }}><i className="fab fa-twitter"></i></a>
                        <a href="_blank" onClick={(e) => {e.preventDefault(); }}><i className="fab fa-linkedin"></i></a>
                        <a href="_blank" onClick={(e) => {e.preventDefault(); }}><i className="fab fa-google-plus"></i></a>
                    </div>
                    </div>
                </div>
            </li>

        )
    })
    
}
const ourAgent = () => {

    
    return(
        <section id="aa-agents">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="aa-agents-area">
                    <div className="aa-title">
                    <h2>Our Agents</h2>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit ea nobis quae vero voluptatibus.</p>
                    </div>
                    
                    <div className="aa-agents-content">
                    <ul className="aa-agents-slider">
                        {renderAgent()}
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default ourAgent
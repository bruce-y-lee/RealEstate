import React from 'react';
import _ from 'lodash';

const testimonialList = [
    {title: "Web Designer", name: "David Muller", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consequuntur ducimus cumque iure modi nesciunt recusandae eligendi vitae voluptatibus, voluptatum tempore, ipsum nisi perspiciatis. Rerum nesciunt fuga ab natus, dolorem?"},
    {title: "CEO", name: "James Barney", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupipsum nisi perspiciatis. Rerum nesciunt fuga ab natus, dolorem?"},
    {title: "Engineer" ,name: "Fillip Madga", text: "Lorem ipsum dolor sit amet,voluptatibus, voluptatum temp consectetur adipisicing elit. Cupiditate consequuntur ducimus cumque iure modi nesciunt recusandae eligendi vitae voluptatibus, voluptatum tempore, ipsum nisi perspiciatis. Rerum nesciunt fuga ab natus, dolorem?"},
    {title: "Developer" ,name: "Jsaon Manner",text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  ducimus cumque iure modi nesciunt recusandae eligendi vitae voluptatibus, voluptatum tempore, ipsum nisi perspiciatis. Rerum nesciunt fuga ab natus, dolorem?"},
    {title: "Artist" ,name: "Christiann Veil",text: "Lorem ipsum dolor sit amet, consectetur Cupiditate consequuntur adipisicing elit. Cupiditate consequuntur ducimus cumque iure modi nesciunt recusandae eligendi vitae voluptatibus, voluptatum tempore, ipsum nisi perspiciatis. Rerum nesciunt fuga ab natus, dolorem?"},
    {title: "Dentist" ,name: "Andrea Smith",text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consequuntur ducimus cumque iure modi nesciunt recusandae eligendi vitae voluptatibus, voluptatum tempore, ipsum nisi perspiciatis. Cupiditate consequuntur ducimus cumque Rerum nesciunt fuga ab natus, dolorem?"},
    {title: "Professor" ,name: "Amadeous Schunider",text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. iure modi nesciunt recusandae eligendi vitae voluptatibus, voluptatum tempore, ipsum nisi perspiciatis. Rerum nesciunt fuga ab natus, dolorem?"},
    {title: "Scientist" ,name: "Kevin Padnil",text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consequuntur ducimus cumque iure modi nesciunt recusandae eligendi vitae ore, ipsum nisi perspiciatis. Rerum nesciunt fuga ab natus, dolorem?"}
]

const brandList = [1,2,3,4,5,6,7,8,9,10];


const renderTestimonial = ()=>{  
    var counter =0;
    return _.map(testimonialList, (testimonial)=>{
        counter++;
        // console.log(counter);
        return(
            <li key={`testimonial ${counter}`}>
                <div className="aa-testimonial-single">
                    <div className="aa-testimonial-img">
                    <img src={`img/testimonial-${counter}.jpg`} alt="testimonial img"/>
                    </div>
                    <div className="aa-testimonial-info">
                    <p>{testimonial.text}</p>
                    </div>
                    <div className="aa-testimonial-bio">
                    <p>{testimonial.name}</p>
                    <span>{testimonial.title}</span>
                    </div>
                </div>
            </li>

        )
    })
    
}

const renderBrand = () => {
    // var counter =0;
    return _.map(brandList, (i)=>{
        return(
            <li key={`brand ${i}`}>
                <div className="aa-client-single-brand">
                <img src={`img/client-brand-${i}.png`} alt="brand type"/>
                </div>
            </li>

        )
    })
}

const clientBrand = () => {
    return (
        <section id="aa-client-brand">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="aa-client-brand-area">
                    <ul className="aa-client-brand-slider">
                    {renderBrand()}
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}
const clientTestimonial = () => {

    
    return(
        <div>
            <section id="aa-client-testimonial">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="aa-client-testimonial-area">
                        <div className="aa-title">
                        <h2>What Client Say</h2>
                        <span></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus eaque quas debitis animi ipsum, veritatis!</p>
                        </div>
                        
                        <div className="aa-testimonial-content">
                        
                        <ul className="aa-testimonial-slider">
                            {renderTestimonial()}
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
             </section>
             {clientBrand()}

        </div>
        
    )
}

export default clientTestimonial;
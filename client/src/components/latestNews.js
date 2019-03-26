import React from 'react';
import _ from 'lodash';

const newsList = [
    {date: "25 March 19", title: "Lorem ipsum dolor sit amet, consectetur.", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consequuntur ducint recusandae eligendi vitae voluptatibus, voluptatum tempore, ipsum nisi perspiciatis. Rerum nesciunt fuga ab natus, dolorem?"},
    {date: "24 March 19", title: "Ipsum sit amet, consectetur.", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consequuntuecusandae eligendi vitae voluptatibus, voluptatum tempore, ipsum nisi perspiciatis. Rerum nesciunt fuga ab natus, dolorem?"},
    {date: "23 March 19", title: "Dolor sit amet, consectetur.", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. nesciunt recusandae eligendi vitae voluptatibus, voluptatum tempore, ipsum nisi perspiciatis. Rerum nesciunt fuga ab natus, dolorem?"},
]




const renderNews = ()=>{  
    var counter =0;
    return _.map(newsList, (news)=>{
        counter++;
        return(
            <div key={`news ${counter}`} className="col-md-4">
            <article className="aa-blog-single">
                <figure className="aa-blog-img">
                <a href="_blank" onClick={(e) => {e.preventDefault(); }}><img src={`img/blog-img-${counter}.jpg`} alt="img"/></a>
                <span className="aa-date-tag">{news.date}</span>
                </figure>
                <div className="aa-blog-single-content">
                <h3><a href="_blank" onClick={(e) => {e.preventDefault(); }}>{news.title}</a></h3>
                <p>{news.text}</p>
                <div className="aa-blog-single-bottom">
                    <a href="_blank" onClick={(e) => {e.preventDefault(); }} className="aa-blog-author"><i className="fas fa-user"></i> Admin</a>
                    <a href="_blank" onClick={(e) => {e.preventDefault(); }} className="aa-blog-comments"><i className="far fa-comment"></i>{counter + 3}</a>
                </div>
                </div>
            
            </article>
            </div>

        )
    })
    
}




const latestNews = () => {

    
    return(
        <section id="aa-latest-blog">
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="aa-latest-blog-area">
                    <div className="aa-title">
                    <h2>Latest News</h2>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magni, est harum repellendus. Accusantium, nostrum!</p>
                    </div>
                    <div className="aa-latest-blog-content">
                    <div className="row">
                    {renderNews()}    
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
    )
}

export default latestNews;
import React, { Component } from 'react';
import './MainNewsArea.css';
import { connect } from 'react-redux';

export const MainNewsArea = ({news}) => {
	// console.log(news)
	// console.log(news[0])
  if (news[0] && news[0].title) {
  	console.log(news)
  	console.log(news[0].date_issued)
          // <img src={news[0].url}/>
  	return (
  		<section className="news_container-body">
        <article className="newsarticle_article-main">
          <div className="box"></div>
          <article className="news_text-body">
            <h1 className="news_container-title">{news[0].title.name}</h1>
            <h3 className="news_container-text">Number: {news[0].number}</h3>
            <h3 className="news_container-text">Data Issued {news[0].date_issued}</h3>
          </article>
        </article>
      </section>
    )
  } else {
  	return (
  		<section>
        <article className="news_container-body">
          <h1>'else'</h1>
        </article>
      </section>
  		)
  }


    
	

};


export const mapStateToProps = state => ({
  news: state.news
})

export default connect(mapStateToProps)(MainNewsArea);

// export default MainNewsArea;
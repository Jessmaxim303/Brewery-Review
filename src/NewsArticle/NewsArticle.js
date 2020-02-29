import React, { Component } from 'react';
import './NewsArticle.css';

import { connect } from 'react-redux';

export const NewsArticle = ({news}) => {
	// console.log(news)
	// console.log(news[0])
  // if (news[0] && news[0].title) {
  // 	console.log(news[0].title)
  // }
		return (
      <article className="newsarticle_article-main" >
        <img className='newsarticle-img' />
        <h1 className='newsarticle-h1'>Nasa finds other world</h1>
        <p className='newsarticle-p'>Main text block area</p>
      </article>
			)
	}

// export const mapStateToProps = state => ({
//   news: state.news
// })

// export default connect(mapStateToProps)(NewsArticle);

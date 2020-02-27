import React, { Component } from 'react';
import './NewsArticle.css';

export class NewsArticle extends Component {
	render() {
		return (
      <article className="newsarticle_article-main">
        <img className='newsarticle-img' />
        <h1 className='newsarticle-h1'>'News article'</h1>
        <p className='newsarticle-p'>para</p>
      </article>
			)
	}
}
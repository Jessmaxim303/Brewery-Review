import React from 'react';
import './NewsArticle.css';

export const NewsArticle = ({title, id}) => {
		return (
      <article className="newsarticle_article-main" key={id}>
        <img className='newsarticle-img' />
        <h1 className='newsarticle-h1'>Nasa finds other world near sun{title}</h1>
        <p className='newsarticle-p'>Main text block area</p>
      </article>
			)
	}


import React, { Component } from 'react';
import './MainNewsArea.css';
import { connect } from 'react-redux';

import { NewsArticle } from '../NewsArticle/NewsArticle.js';

// console.log(props)
const MainNewsArea = (news) => {
  console.log(news)
    return (
      <article className="news_main-body">
        <NewsArticle />
      </article>
    )
	
};

export const mapStateToProps = state => ({
  news: state
})

export default connect(mapStateToProps)(MainNewsArea);
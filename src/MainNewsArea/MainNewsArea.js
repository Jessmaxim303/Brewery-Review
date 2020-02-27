import React, { Component } from 'react';
import './MainNewsArea.css';

import { NewsArticle } from '../NewsArticle/NewsArticle.js';

export class MainNewsArea extends Component {


	render() {
    return (
      <article className="news_main-body">
        <NewsArticle />
      </article>
    )
	}
};
import React, { Component } from 'react';
import './SideNavigation.css';

export class SideNavigation extends Component {
	render() {
    return (
      <article className="navigation_article-main">
        <button className="navigation_home navigation">Home</button>
        <button className="navigation_years-ago navigation">100 years ago today</button>
        <button className="navigation_area navigation">Area</button>
        <button className="years_ago-favorites navigation">Favorite</button>
        
      </article>
    	)
	}
};
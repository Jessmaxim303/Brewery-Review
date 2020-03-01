import React, { Component } from 'react';
import './StateContainer.css';

import { StateArticle } from '../StateArticle/StateArticle.js';
import { connect } from 'react-redux';

export class StateContainer extends Component {

  render() {

    let stateArticles = this.props.breweries.map(article => {
      console.log(article)
      return < StateArticle 
        key={article.id}
        name={article.name}
        type={article.brewery_type}
        city={article.city}
        state={article.state}
        website={article.website_url}
        />
    })
    
    return (
      console.log('State Constainer', this.props),
      <section className="state_section-main">
        <section className="state_section-left">
         <h1 className="state_section-letters">Bc</h1>
         <h3 className="state_section-subletter">Brew Crawlers</h3>
        </section>
        <section className="state_section-right">
          <button className="pages_button state_button">Next Page</button>
          <button className="pages_button state_button">Past Page</button>
            {stateArticles}
          <button className="pages_button state_button">Next Page</button>
          <button className="pages_button state_button">Past Page</button>
        </section>
      </section>
      )
    }
  }

export const mapStateToProps = state => ({
  breweries: state.news[0]
})

export default connect(mapStateToProps)(StateContainer);


import React, { Component } from 'react';
import './StateContainer.css';
import { addFavorite, getFavorite } from '../actions';
import { connect } from 'react-redux';
import { FlipContainer } from '../FlipContainer/FlipContainer.js';
import ReactCardFlip from 'react-card-flip';

export class StateContainer extends Component {
  constructor() {
    super();
    this.state = {
      display: []
    };
  }

  addToFavorites = (obj) => {
    this.props.addFavorite(obj)
  }

  getFavorites = () => {
    this.props.getFavorite(this.props.favorites)
  }

  render() {
    let flip = this.props.breweries.map(article => {
      return (
          <FlipContainer 
            id={article.id}
            name={article.name}
            type={article.brewery_type}
            city={article.city}
            state={article.state}
            website={article.website_url}
            addToFavorites={this.addToFavorites}
            data={article}
            /> 
      )
    })
    
    return (
      <section className="state_section-main">
        <section className="state_section-left">
         <h1 className="state_section-letters">Bc</h1>
         <h3 className="state_section-subletter">Brew Crawlers</h3>
         <button className="state_button-favorite" onClick={(e) => this.getFavorites()}>Favorites</button>
        </section>
        <section className="state_section-right">
          {flip}
        </section>
      </section>
      )
    }
  }

export const mapStateToProps = state => ({
  breweries: state.news[0],
  favorites: state.favorite
})

export const mapDispatchToProps = dispatch => ({
  addFavorite: (id) => { dispatch(addFavorite(id)) },
  getFavorite: (brewery) => { dispatch(getFavorite(brewery)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(StateContainer);


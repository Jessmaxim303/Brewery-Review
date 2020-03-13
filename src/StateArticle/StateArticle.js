import React from 'react';
import './StateArticle.css';
import { Link } from "react-router-dom";
import { addFavorite } from '../actions';
import { connect } from 'react-redux';

export const StateArticle = ({id, name, type, city, state, website, addToFavorites, data, handleClick}) => {
    console.log("data", data)
	return (
    <section className="brewery_company-container">
      <article className="state_company-icon">{state.substring(0,2)}
        <p className="state_name-p">{state.toUpperCase()}</p>
      </article>
      <article className="brewery_company-card">
        <section className="brewery_card-header">
          <h3 className="brewery_header-title">{name}</h3>
        </section>
        <section className="brewery_card-body">
          <h3 className="state_upper-subtitle">Type: {type}</h3>
          <h1 className="state_upper-subtitle">State: {state}</h1>
          <h1 className="state_upper-subtitle">City: {city}</h1>
        </section>
        <section className="brewery_button-container">
          <a className="state_website-button " href={website}>Website</a>

            <button className="state_button" onClick={(e) => handleClick(e)}>Review</button>

          <button className="state_button" onClick={() => addToFavorites(data)}>Favorite</button>
        </section>
      </article>
    </section>
		)
}

export const mapStateToProps = state => ({
  breweries: state.news[0]
})

export default connect(mapStateToProps)(StateArticle);

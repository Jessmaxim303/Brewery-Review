import React from 'react';
import './StateArticle.css';

export const StateArticle = ({id, name, type, city, state, website}) => {
	return (
    <section id={id}className="brewery_company-container">
      <article className="state_company-icon">{state.substring(0,2)}</article>
      <article className="brewery_company-card">
        <section className="brewery_card-header">
            <h3 className="brewery_header-title">{name}</h3>
        </section>
        <section className="brewery_card-body">
          
            <h3 className="state_upper-subtitle">Type: {type}</h3>
            <h1 className="state_upper-subtitle">State: {state}</h1>
            <h1 className="state_upper-subtitle">City: {city}</h1>
          
        </section>
        <section className="state_body-lower">
          <a className="website_button" href={website}>Website</a>
          <button className="state_favorite-button state_button">Comment</button>
        </section>
      </article>
    </section>
		)
}
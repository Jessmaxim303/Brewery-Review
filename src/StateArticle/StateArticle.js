import React, { Component } from 'react';
import './StateArticle.css';

export const StateArticle = () => {
	return (
    <section className="state_company-container">
      <article className="state_company-icon">Ma</article>
      <article className="state_company-body">
        <section className="state_body-upper">
          <h3 className="state_upper-title">COLORADO TIMES</h3>
          <h3 className="state_upper-subtitle">Issues: 8</h3>
        </section>
        <section className="state_body-lower">
          <button className="state_note-button state_button">Add Note</button>
          <button className="state_favorite-button state_button">Save</button>
        </section>
      </article>
    </section>
		)
}
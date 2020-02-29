import React, { Component } from 'react';
import './StateContainer.css';

import { StateArticle } from '../StateArticle/StateArticle.js';

export const StateContainer = () => {
	return (
    <section className="state_section-main">
      <section className="state_section-left">
        <h1 className="state_section-letters">Ma</h1>
        <h4 className="state_section-subletter">Massachusetts</h4>
      </section>
      <section className="state_section-right">
        < StateArticle />
      </section>
    </section>
		)
}
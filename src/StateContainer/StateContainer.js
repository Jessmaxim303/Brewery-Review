import React, { Component } from 'react';
import './StateContainer.css';

import { StateArticle } from '../StateArticle/StateArticle.js';
import { connect } from 'react-redux';

export class StateContainer extends Component {

  render() {
    
	  return (
      console.log(this.props.stateRecords.totalItems),
      <section className="state_section-main">
        <section className="state_section-left">
          <h1 className="state_section-letters">Ma</h1>
          <h4 className="state_section-subletter">Massachusetts</h4>
          <p> articles</p>
        </section>
        <section className="state_section-right">
          // < StateArticle />
        </section>
      </section>
		  )
    }
  }

export const mapStateToProps = state => ({
  stateRecords: state.news[0]
})

export default connect(mapStateToProps, null)(StateContainer);


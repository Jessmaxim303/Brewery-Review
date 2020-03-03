import React, { Component } from 'react';
import { fetchStateNewsApi } from '../apiCalls/apiCalls.js';
import { connect } from 'react-redux';
import { getNews } from '../actions';
import './Search.css';

import { Link } from "react-router-dom";

export class SearchForm extends Component {
	constructor(props) {
    super(props)
    this.state = {
      area: ''
    }
  }

  componentDidMount() {
    Promise.all([this.loadStateNews()])
  }

  loadStateNews() {
    fetchStateNewsApi(this.state.area)
    .then(data => {
      this.props.getNews(data)
    })
  }

  handleChange = (e) => {
    this.setState({ area: e.target.value });
  }

	render() {
		return(
      <form autoComplete="off" className="search_box">
        <section className="search_logo-box">
          <h1 className="search_logo-letters">Br</h1>
        </section>
        <section className="search_form-box">
          <label for="name" className="search_input-label">Pick a state:</label>
          <input
    	      type="text"
    	      className="search_input"
    	      value={this.state.area}
    	      placeholder="Enter Your State"
    	      name="name"
            onChange={this.handleChange}
    	    />
          <Link to={{ pathname: `/state` }}>
    	        <button className="search_button" onClick={() => this.loadStateNews()}>Find!</button>
          </Link>
        </section>
      </form>
			)
	}

}

// export const mapStateToProps = state => {
//   return (
//   breweries: state
//   )
// }

export const mapDispatchToProps = dispatch => ({
  getNews: (area) => dispatch( getNews(area) )

})

export default connect(null,  mapDispatchToProps)(SearchForm);

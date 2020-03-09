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
      <section className="search_form-box">
        <form autoComplete="off" className="search_box">
          <label for="name" className="search_input-label"></label>
          <input
    	      type="text"
    	      className="search_input"
    	      value={this.state.area}
    	      placeholder="Search by Name, State, City, Zip Code"
    	      name="name"
            onChange={this.handleChange}
    	    />
          <Link className="search_button-link" to={{ pathname: `/state` }}>
    	        <button className="search_button" onClick={() => this.loadStateNews()}>Find!</button>
          </Link>
        </form>
      </section>
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

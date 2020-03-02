import React, { Component } from 'react';
import { addReview } from '../actions';
import { connect } from 'react-redux';
import './ReviewForm.css';

export class ReviewForm extends Component {
  constructor() {
  	super();
  	this.state = {
  		review: ''
  	}
  }

  handleChange = e => {
  	console.log(e.target.value)
  	this.setState({ review: e.target.value })
  }

  submitForm = e => {
    e.preventDefault()
    this.props.BrewReview(this.state.review)
    this.setState({ review: '' });
  }

	render() {
		return(
      <section className="company_textarea-container">
			  <form className="review_form-container" onSubmit={this.submitForm}>
				  <input
				  className="review_form"
				  value={this.state.review}
				  placeholder="Add a review"
				  onChange={this.handleChange} />
				  <button className="review_form-button">Submit Review</button>
			  </form>
			</section> 
		)
	}
}


const mapDispatchToProps = (dispatch) => ({
  BrewReview: (review) => { dispatch( addReview(review) )}
});

export default connect(null, mapDispatchToProps)(ReviewForm);

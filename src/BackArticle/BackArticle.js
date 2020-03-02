import React, { Component } from 'react';
import './BackArticle.css';
import { connect } from 'react-redux';
import ReviewForm from '../ReviewForm/ReviewForm.js';
import ReviewCard from '../ReviewCard/ReviewCard.js';

export const BackArticle = ({ reviews }) => {
	if (reviews[0] && reviews[0].reviews) {
		console.log(reviews[0].reviews)
	}

	
  const displayReview = reviews.reviews.map(review => {
  	return <ReviewCard
  	  key={review.id}
  	  review={review.review}
  	  />
  })
    
  	return (

			<section className="brewery_company-page">
          <section className="company_form-left">
            <h1>Company Name</h1>
            <h3>Dog Friendly</h3>
            {displayReview}
					</section>
					<section className="company_form-right">
					  <ReviewForm />
					</section>

			</section>
  		)
 
}


const mapStateToProps = state => ({
  reviews: state
});

export default connect(mapStateToProps)(BackArticle);


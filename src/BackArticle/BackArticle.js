import React, { Component } from 'react';
import './BackArticle.css';
import { connect } from 'react-redux';
import ReviewForm from '../ReviewForm/ReviewForm.js';
import ReviewCard from '../ReviewCard/ReviewCard.js';

export const BackArticle = ({ reviews }) => {

	
  const displayReview = reviews.reviews.map(review => {
  	return <ReviewCard
  	  key={review.id}
  	  review={review.review}
  	  />
  })
    
  	return (

			<section className="brewery_company-page">
          <section className="company_form-left">
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


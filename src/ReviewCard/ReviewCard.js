import React from 'react';
import './ReviewCard.css'

const ReviewCard = (review) => {
	console.log(review.review)
	return (
    <section className="review_card-container">
      <h1>{review.review}</h1>
    </section>
		)
}

export default ReviewCard;
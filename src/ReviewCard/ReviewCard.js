import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({name, handleClick}) => {
	return (
    <section className="review_card-container">
      <section className="review_card-header">
        <h1 className="review_card-name">{name}</h1>
      </section>
      <section className="review_title-box">
      </section>
      <button className="review_card-button" onClick={(e) => handleClick(e)}>Click to flip</button>
    </section>
		)
}

export default ReviewCard;
import React, { Component } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard.js';
import StateArticle from '../StateArticle/StateArticle.js';
import ReactCardFlip from 'react-card-flip';

export class FlipContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFlipped: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    let front = <StateArticle
      id={this.props.id}
      name={this.props.name}
      type={this.props.brewery_type}
      city={this.props.city}
      state={this.props.state}
      website={this.props.website_url}
      addToFavorites={this.props.addToFavorites}
      data={this.props.article}
      handleClick={this.handleClick}
    />
    let back = <ReviewCard
      name={this.props.name}
      handleClick={this.handleClick}
    />
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        {front}
        {back}
      </ReactCardFlip>
    )
  }
}

export default FlipContainer;
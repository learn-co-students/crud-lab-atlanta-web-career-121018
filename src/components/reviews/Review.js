import React, { Component } from 'react';

class Review extends Component {
    // const { review } = this.props;


	render() {
		return (
			<div>
				<li>{this.props.review.text}</li>
				<button onClick={(e) => this.props.deleteReview(this.props.review.id)}> X </button>
			</div>
		);
	}
}

export default Review;

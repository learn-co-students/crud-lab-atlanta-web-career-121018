import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

    mapReviews = () => {
        return this.props.reviews.map((rev) => {
            if (rev.restId === this.props.restId) {
                return <Review key={rev.id} review={rev} deleteReview={this.props.deleteReview} />
            }
        })
    }

	render() {
		return (
            <ul>
                {this.mapReviews()}
            </ul>
        )
	}
}

export default Reviews;

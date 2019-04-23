import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

import { connect } from 'react-redux';

class ReviewsContainer extends Component {
	render() {
		return (
			<div>
				<ReviewInput restId={this.props.rest.id} addReview={this.props.addReview} />
				<Reviews reviews={this.props.reviews} restId={this.props.rest.id} deleteReview={this.props.deleteReview} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
		reviews: state.reviews
		// reviews: state.reviews.filter((rev) => rev.restId === this.props.rest.id)
	};
}

const mapDispatchToProps = (dispatch) => ({
    addReview: (review) => dispatch({ type: 'ADD_REVIEW', review }),
    deleteReview: (revId) => dispatch({ type: 'DELETE_REVIEW', revId })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

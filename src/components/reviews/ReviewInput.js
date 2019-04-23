
import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

	state = {
		text: ''
	};

	handleKeyDown = (event) => {
		console.log(event.target.value);
		this.setState({
			text: event.target.value
		});
	};

	handleOnSubmit = (event) => {
        event.preventDefault();
        let reviewObj = { restId: this.props.restId, text: this.state.text };
		this.props.addReview(reviewObj);
		this.setState({
			text: ''
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={(event) => this.handleOnSubmit(event)}>
					<input type='text' value={this.state.text} onChange={(event) => this.handleKeyDown(event)} />
					<input type='submit' />
				</form>
			</div>
		);
	}
}

export default ReviewInput;

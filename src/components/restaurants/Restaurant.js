
import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

    // const { rest, deleteRest } = this.props;
	render() {

		return (
			<div>
				<li>
					{this.props.rest.name}
					<button onClick={() => this.props.deleteRest(this.props.rest.id) }> Delete </button>
					<ReviewsContainer rest={this.props.rest} />
				</li>
			</div>
        );
        
	}
}

export default Restaurant;

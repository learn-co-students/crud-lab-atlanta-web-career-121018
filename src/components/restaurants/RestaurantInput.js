

import React, { Component } from 'react';


class RestaurantInput extends Component {
	state = {
        text: ''
	};

	handleKeyDown = (event) => {
        console.log(event.target.value)
		this.setState({
			text: event.target.value
		});
	};

	handleOnSubmit = (event) => {
		event.preventDefault();
		this.props.addRest(this.state.text);
		this.setState({ 
            text: ''
        });
	};

	render() {
		return (
			<div>
				<form onSubmit={(event) => this.handleOnSubmit(event)}>
					<input type='text' value={this.state.text} onChange={(event) => this.handleKeyDown(event)} />
					<input type='submit'/>
				</form>
			</div>
		);
	}
}

export default RestaurantInput;

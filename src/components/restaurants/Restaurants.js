import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

    mapRests = () => {
        return this.props.restaurants.map((rest) => {
            return <Restaurant key={rest.id} rest={rest} deleteRest={this.props.deleteRest} />
        })
    }
	render() {
        return (
            <ul>
                {this.mapRests()}
            </ul>
        )
	}
}

export default Restaurants;

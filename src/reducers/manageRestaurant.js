import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
	state = {
        restaurants: [],
        reviews: []
	},
	action
) {
	switch (action.type) {
		case 'ADD_REST':
			const makeRest = {
				id: cuid(),
				name: action.name
			};
			return { ...state, restaurants: state.restaurants.concat(makeRest) };

		case 'DELETE_REST':
			return { ...state, restaurants: state.restaurants.filter((rest) => rest.id !== action.restId) };

		case 'ADD_REVIEW':
			console.log(action);
			console.log(action.review);
			const makeRev = {
				id: cuid(),
				text: action.review.text,
				restId: action.review.restId
			};
			return { ...state, reviews: [...state.reviews, makeRev] };

        case 'DELETE_REVIEW':
        console.log(action)
			return { ...state, reviews: state.reviews.filter((rest) => rest.id !== action.revId) };

		default:
			return state;
	}
}

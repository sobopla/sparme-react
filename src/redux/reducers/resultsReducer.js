import { UPDATE_RESULTS } from '../actions/types.js'
const initialState = {}
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_RESULTS:
			console.log(action.payload.data)
			return action.payload.data
			break

		default:
			return state
			break
	}
}

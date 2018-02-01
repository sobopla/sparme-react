import { CHANGE_AUTH } from '../actions/types.js'
const initialState = false
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_AUTH:
			return action.user

		default:
			return state
	}
}

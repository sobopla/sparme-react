import { CHANGE_AUTH } from '../actions/types.js'

export default function reducer(state = false, action) {
	switch (action.type) {
		case CHANGE_AUTH:
			return action.payload
			break

		default:
			return state
			break
	}
}

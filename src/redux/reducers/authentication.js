import { CHANGE_AUTH } from '../actions/types.js'
const initialState = { auth: {} }
export default function reducer(state = initialState, action) {
	// console.log('reducer! : ' + action.user)
	switch (action.type) {
		case CHANGE_AUTH:
			return { auth: action.auth }
			break

		default:
			return state
			break
	}
}

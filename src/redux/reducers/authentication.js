import { CHANGE_AUTH } from '../actions/types.js'
const initialState = false
export default function reducer(state = initialState, action) {
	// console.log('reducer! : ' + action.user)
	switch (action.type) {
		case CHANGE_AUTH:
			return action.user
			break

		default:
			return initialState
			break
	}
}

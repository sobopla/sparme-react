import { FORM_SUBMIT } from '../actions/types.js'

export default function valuesReducer(state = {}, action) {
	switch (action.type) {
		case FORM_SUBMIT:
			console.log(action.payload)
			return {
				...state,
				values: action.payload
			}
			break

		default:
			return state
			break
	}
}

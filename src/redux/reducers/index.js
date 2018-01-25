import { combineReducers } from 'redux'
import textReducer from './textReducer'
import resultsReducer from './resultsReducer'
import authenticationReducer from './authentication'

export default combineReducers({
	text: textReducer,
	results: resultsReducer,
	user: authenticationReducer
})

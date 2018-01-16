import { combineReducers } from 'redux'
import textReducer from './textReducer'
import resultsReducer from './resultsReducer'

export default combineReducers({
	text: textReducer,
	results: resultsReducer
})

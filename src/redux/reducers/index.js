import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import textReducer from './textReducer'
import valuesReducer from './valuesReducer'
import resultsReducer from './resultsReducer'
import authenticationReducer from './authentication'

export default combineReducers({
	text: textReducer,
	results: resultsReducer,
	authentication: authenticationReducer,
	values: valuesReducer,
	form: formReducer
})

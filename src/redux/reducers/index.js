import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import textReducer from './textReducer'
import valuesReducer from './valuesReducer'
import resultsReducer from './resultsReducer'
import roundupReducer from './roundupReducer'
import authenticationReducer from './authentication'

export default combineReducers({
	text: textReducer,
	results: resultsReducer,
	user: authenticationReducer,
	values: valuesReducer,
	form: formReducer,
	roundup: roundupReducer,

})

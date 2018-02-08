import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './redux/store.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Provider } from 'react-redux'

//full list of default color schemes:
//https://github.com/mui-org/material-ui/blob/master/src/styles/getMuiTheme.js

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#85d0d4',
  },
  raisedButton: {
    textColor: '#ffffff'
  },
  flatButton: {
    textColor: '#85d0d4'
  },
  stepper: {
    iconColor: '#85d0d4'
  },
  checkbox: {
    boxColor: '#85d0d4',
    checkedColor: '#85d0d4',
    requiredColor: '#f16151',
    disabledColor: 'rgba(32, 32, 32, 0.35)',
    labelColor: '#202020',
    labelDisabledColor: 'rgba(32, 32, 32, 0.35)',
  },
  textField: {
    textColor: '#22a9a3',
    hintColor: 'rgba(32, 32, 32, 0.35)',
    floatingLabelColor: 'rgba(32, 32, 32, 0.35)',
    disabledTextColor: 'rgba(32, 32, 32, 0.35)',
    errorColor: '#f16151',
    focusColor: '#85d0d4',
    backgroundColor: 'transparent',
    borderColor: 'rgba(32, 32, 32, 0.35)',
  },
    datePicker: {
      color:  '',
      textColor: '',
      calendarTextColor: '',
      selectColor: '',
      selectTextColor: '',
      calendarYearBackgroundColor: '',
      headerColor: ''
    }
});

ReactDOM.render(<Provider store={store}><MuiThemeProvider muiTheme={muiTheme}><App /></MuiThemeProvider></Provider>, document.getElementById('root'))
registerServiceWorker()

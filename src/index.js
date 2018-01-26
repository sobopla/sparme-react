import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './redux/store.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Provider } from 'react-redux'

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#85d0d4',
  }
});

ReactDOM.render(<Provider store={store}><MuiThemeProvider muiTheme={muiTheme}><App /></MuiThemeProvider></Provider>, document.getElementById('root'))
registerServiceWorker()

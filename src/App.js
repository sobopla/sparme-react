import React, { Component } from 'react'
import './styles/app.sass'
import injectTapEventPlugin from "react-tap-event-plugin"
import { BrowserRouter } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from "react-redux"
import { updateText } from "./redux/actions/updateText.js"
import { updateResults } from "./redux/actions/updateResults.js"
import { changeAuth } from './redux/actions/changeAuth'

import Layout from './layout/layout'

injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout auth={this.props.authentication} />
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.text.value,
    results: state.results,
    authentication: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeAuth: changeAuth}, dispatch)
}

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default connect(mapStateToProps, mapDispatchToProps)(App)

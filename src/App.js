import React, { Component } from 'react'
import './styles/app.sass'
import injectTapEventPlugin from "react-tap-event-plugin"
import { BrowserRouter } from 'react-router-dom'

import { connect } from "react-redux"
import { updateText } from "./redux/actions/updateText.js"
import { updateResults } from "./redux/actions/updateResults.js"

import Layout from './layout/layout'

injectTapEventPlugin();

const mapStateToProps = state =>  {
  return {
    text: state.text.value,
    results: state.results,
    items: state.items
  };
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App)

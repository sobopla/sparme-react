//higher order component in progress to wrap routes protected until sign in
//reference tutorial: Stephen Grider Advanced React Course on Udemy
//                    Section on Higher Order Components
// (ask lizzie for udemy sign in)

import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {
  class Authentication extends Component {
    render(){
      console.log(this.props.authenticated);
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated}
  }

  return connect(mapStateToProps)(Authentication)
}

//higher order component in progress to wrap routes protected until sign in
//reference tutorial: Stephen Grider Advanced React Course on Udemy
//                    Section on Higher Order Components
// (ask lizzie for udemy sign in)

import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {
  class requireAuth extends Component {
    render(){
      if(this.props.user) {
        return <ComposedComponent {...this.props} />
      }
      else {
        return " "
      }
    }
  }

  function mapStateToProps(state) {
    return { user: state.user}
  }

  return connect(mapStateToProps)(requireAuth)
}

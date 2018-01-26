import React, { Component } from 'react'
import { connect } from 'react-redux'
import requireAuth from '../hoc/requireAuth'


class Financing extends Component {
  render(){
    return (
      <div>
        <div>Financing </div>
      </div>
    )
  }
}

// function mapStateToProps (state) {
//   return { authenticated: state.authenticated }
// }

export default connect()(requireAuth(Financing))

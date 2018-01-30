import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from '../redux/actions'


class Blog extends Component {
  render(){
    return (
      <div>blog</div>
    )
  }
}

// function mapStateToProps (state) {
//   return { authenticated: state.authenticated }
// }

export default connect()(Blog)

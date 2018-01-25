import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from '../redux/actions'


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

export default connect()(Financing)

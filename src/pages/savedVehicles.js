import React, { Component } from 'react'
import Aux from '../hoc/Aux'
import { connect } from 'react-redux'
// import * as actions from '../redux/actions'


class SavedVehicles extends Component {
  render(){
    return (
      <div>saved vehicles</div>
    )
  }
}

// function mapStateToProps (state) {
//   return { authenticated: state.authenticated }
// }

export default connect()(SavedVehicles)

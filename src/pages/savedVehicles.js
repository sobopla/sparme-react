import React, { Component } from 'react'
import Aux from '../hoc/Aux'
import { connect } from 'react-redux'
// import * as actions from '../redux/actions'


class SavedVehicles extends Component {
  render(){
    return (
      <Aux>
        <div>SavedVehicles </div>
      </Aux>
    )
  }
}

// function mapStateToProps (state) {
//   return { authenticated: state.authenticated }
// }

export default connect()(SavedVehicles)

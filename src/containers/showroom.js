import React, { Component } from 'react'
import Aux from '../hoc/Aux'
import { connect } from 'react-redux'
// import * as actions from '../redux/actions'


class Showroom extends Component {
  render(){
    return (
      <Aux>
        <div>showroom </div>
      </Aux>
    )
  }
}

// function mapStateToProps (state) {
//   return { authenticated: state.authenticated }
// }

export default connect()(Showroom)

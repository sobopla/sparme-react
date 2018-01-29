import React, { Component } from 'react'
import { connect } from 'react-redux'
import requireAuth from '../hoc/requireAuth'


class SavedVehicles extends Component {
  render(){
    return (
      <div className='saved-vehicles-page'>saved vehicles</div>
    )
  }
}

// function mapStateToProps (state) {
//   return { authenticated: state.authenticated }
// }

// export default connect()(SavedVehicles)
export default requireAuth(SavedVehicles)

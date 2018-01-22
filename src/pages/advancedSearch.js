import React, { Component } from 'react'
import Aux from '../hoc/Aux'
import { connect } from 'react-redux'
// import * as actions from '../redux/actions'

import AdvancedFilterBanner from '../components/common/advancedFilterBanner'


class AdvancedSearch extends Component {
  render(){
    return (
      <Aux>
        <AdvancedFilterBanner />
        <div>Advanced Search Typeform here</div>
        <div class='search-button-block'>
          <button className='basic-button green2'>View Results</button>
        </div>
      </Aux>
    )
  }
}

// function mapStateToProps (state) {
//   return { authenticated: state.authenticated }
// }

export default connect()(AdvancedSearch)

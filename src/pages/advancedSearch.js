import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from '../redux/actions'

import AdvancedFilterBanner from '../components/common/advancedFilterBanner'


class AdvancedSearch extends Component {
  render(){
    return (
      <div>
        <AdvancedFilterBanner />
        <div>Advanced Search Typeform here</div>
        <div class='search-button-block'>
          <button className='basic-button green2-border'>View Results</button>
        </div>
      </div>
    )
  }
}

// function mapStateToProps (state) {
//   return { authenticated: state.authenticated }
// }

export default connect()(AdvancedSearch)

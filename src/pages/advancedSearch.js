import React, { Component } from 'react'
import { connect } from 'react-redux'
import requireAuth from '../hoc/requireAuth'
import { NavLink } from 'react-router-dom'

import AdvancedFilterBanner from '../components/common/advancedFilterBanner'
import AdvSearchForm from '../containers/search/adv-search'


class AdvancedSearch extends Component {
  render(){
    return (
      <div>
        <AdvancedFilterBanner />
        <AdvSearchForm />
        <div class='search-button-block'>
          <NavLink to='/search-results'>
            <button className='basic-button green2-border'>View Results</button>
          </NavLink>
        </div>
      </div>
    )
  }
}

// function mapStateToProps (state) {
//   return { authenticated: state.authenticated }
// }

export default connect()(requireAuth(AdvancedSearch))

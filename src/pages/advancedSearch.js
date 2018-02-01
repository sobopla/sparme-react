import React from 'react'
import requireAuth from '../hoc/requireAuth'
import { NavLink } from 'react-router-dom'

import AdvancedFilterBanner from '../components/common/advancedFilterBanner'
import AdvSearchForm from '../containers/search/adv-search'

const AdvancedSearch = () => {
    return (
      <div>
        <AdvancedFilterBanner />
        <AdvSearchForm />
        <div className='search-button-block'>
          <NavLink to='/search-results'>
            <button className='basic-button green2-border'>View Results</button>
          </NavLink>
        </div>
      </div>
    )
}


export default requireAuth(AdvancedSearch)

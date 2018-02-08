import React from 'react'
import requireAuth from '../hoc/requireAuth'
import { NavLink } from 'react-router-dom'

import AdvancedFilterBanner from '../components/common/advancedFilterBanner'
// import AdvSearchForm from '../containers/search/adv-search'
import AdvSearchStepper from '../containers/search/adv-search-stepper'

const AdvancedSearch = () => {
    return (
      <div>
        <AdvancedFilterBanner />
        {/* <div className='flex-center'>
  				<img className='search-bear' src='https://s3.amazonaws.com/assets.how2car/images/logo/potato-bear.png' alt='potato bear'/>
  			</div> */}
        <AdvSearchStepper />
        <div className='search-button-block'>
          <NavLink to='/search'>
            <button className='basic-button blue3-border'
              >Back
            </button>
          </NavLink>
          <NavLink to='/search-results'>
            <button className='basic-button green2-border'>View Results</button>
          </NavLink>
        </div>
      </div>
    )
}


export default AdvancedSearch

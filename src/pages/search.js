import React from 'react'
import requireAuth from '../hoc/requireAuth'

import SearchStepper from '../containers/search/search-stepper'

const Search =() => {
  return (
    <div className='search-page'>
      <div className='flex-center'>
				<img className='search-bear' src='https://s3.amazonaws.com/assets.how2car/images/logo/potato-bear.png' alt='potato bear'/>
			</div>
      <SearchStepper/>
    </div>
  )
}

// export default requireAuth(Search)

export default Search

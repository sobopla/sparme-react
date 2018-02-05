import React from 'react'
import requireAuth from '../hoc/requireAuth'
import ErrorBoundary from '../UI/ErrorBoundary'

import SearchOne from '../containers/search/basic-search'


const Search =() => {
    return (
      <div className='search-page'>
        <ErrorBoundary>
          <SearchOne/>
        </ErrorBoundary>        
      </div>
    )
}

// export default requireAuth(Search)

export default Search

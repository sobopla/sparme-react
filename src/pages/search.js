import React from 'react'
import requireAuth from '../hoc/requireAuth'

import SearchOne from '../containers/search/basic-search'

const Search =() => {
    return (
      <div className='search-page'>
        <SearchOne/>
      </div>
    )
}

// export default requireAuth(Search)

export default Search

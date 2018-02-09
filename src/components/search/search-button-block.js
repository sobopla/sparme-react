import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchButton from './SearchButton'

const searchButtonBlock = (props) => {
  return (
    <div className='search-button-block flex-media'>
      {/* <NavLink to='/advanced-search'>
        <button
          className='basic-button blue3-border'
          >Advanced Search
        </button>
      </NavLink> */}
      <SearchButton />
    </div>
  )
}

export default searchButtonBlock

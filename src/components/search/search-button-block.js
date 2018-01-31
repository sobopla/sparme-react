import React from 'react'
import { NavLink } from 'react-router-dom'

const searchButtonBlock = (props) => {
  return (
    <div className='search-button-block flex-media'>
      <NavLink to='/advanced-search'>
        <button
          className='basic-button blue3-border'
          >Advanced Search
        </button>
      </NavLink>
      <NavLink to='/search-results'>
        <button
          className='basic-button green2-border'
          >View Results
        </button>
      </NavLink>
    </div>
  )
}

export default searchButtonBlock

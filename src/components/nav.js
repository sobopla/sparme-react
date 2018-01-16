import React from 'react'
import { NavLink } from 'react-router-dom'

const nav = () => {
  return (
    <nav>
      <ul className='flex-media'>
        <li>
          <NavLink to='/saved-vehicles' className='nav-item'>Saved Vehicles</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard' className='nav-item'>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to='/search' className='nav-item'>Search</NavLink>
        </li>
        <li>
          <NavLink to='/financing' className='nav-item'>Financing</NavLink>
        </li>
        <li>
          <NavLink to='/accessories' className='nav-item'>Accessories</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default nav

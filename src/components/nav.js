import React from 'react'
import { NavLink } from 'react-router-dom'

const nav = () => {
  return (
    <nav className='nav-web'>
      <ul className='flex-media'>
        <li>
          <NavLink to='/blog' className='nav-item' activeClassName='nav-active'>Blog</NavLink>
        </li>
        {/* <li>
          <NavLink to='/dashboard' className='nav-item' activeClassName='nav-active'>Saved Vehicles</NavLink>
        </li> */}
        <li>
          <NavLink to='/dashboard' className='nav-item' activeClassName='nav-active'>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to='/search' className='nav-item' activeClassName='nav-active'>Search</NavLink>
        </li>
        <li>
          <NavLink to='/financing' className='nav-item' activeClassName='nav-active'>Financing</NavLink>
        </li>
        <li>
          <NavLink to='/accessories' className='nav-item' activeClassName='nav-active'>Accessories</NavLink>
        </li>
        <li>
          <NavLink to='/' className='nav-item' >Logout</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default nav

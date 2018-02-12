import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import requireAuth from '../hoc/requireAuth'

const nav = (props) => {

  return (
    <nav className='nav-web'>
      <ul className='flex-media'>
        <li>
          <NavLink to='https://how2car.wordpress.com/blog/' target='blank' className='nav-item' activeClassName='nav-active'>Blog</NavLink>
        </li>
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
          { props.user ?
            <NavLink className='nav-item' to="/" onClick={props.logout.bind(this)}>
              <div>Logout</div>
            </NavLink>
            :
            <NavLink className='nav-item' to="/" >
              <div>Login</div>
            </NavLink>
          }
        </li>
      </ul>
    </nav>
  )
}

const mapStateToProps = (state) => {
	return { user: state.user }
}

export default connect(mapStateToProps)(requireAuth(nav))

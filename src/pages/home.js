import React from 'react'
import requireAuth from '../hoc/requireAuth'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex-column' style={{padding: '50px'}}>
      <h1 style={{paddingTop: '200px', color: '#22a9a3', textAlign: 'center'}}>Home </h1>
      <br/>
      <div>(Beautiful graphic design and informational copy here)</div>
      <div>It is so beautiful</div>
      <div>Everyone will love it</div>
      <div>Nobody will not love it</div>
    <br/>
      <div>We recommend you go search for a car now</div>
      <NavLink to='/search'><div className='basic-button green2-border'>Search</div></NavLink>
    </div>
  )
}

export default requireAuth(Home)

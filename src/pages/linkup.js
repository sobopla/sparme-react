import React from 'react'
import requireAuth from '../hoc/requireAuth'
import { NavLink } from 'react-router-dom'

const Linkup = () => {
  return (
    <div className='flex-column' style={{padding: '50px'}}>
      <h1 style={{paddingTop: '200px', color: '#22a9a3', textAlign: 'center'}}>Linkup page </h1>
      <br/>
      <div>(Beautiful graphic design and bank linking with plaid here)</div>
      <div>It is so beautiful</div>
      <div>Everyone will love it</div>
      <div>Nobody will not love it</div>
    <br/>
      <div>We recommend you go make a donation here</div>
      <NavLink to='/donate'><div className='basic-button green2-border'>Donate</div></NavLink>
    </div>
  )
}

export default requireAuth(Linkup)

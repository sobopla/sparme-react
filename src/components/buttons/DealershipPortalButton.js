import React from 'react'
import { NavLink } from 'react-router-dom'

const dealershipPortalButton = () => {
  return (
    <NavLink to='/dealer-portal'>
      <div className="basic-button green2" >Dealership Portal</div>
    </NavLink>
  )
}

export default dealershipPortalButton

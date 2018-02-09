import React from 'react'
import { NavLink } from 'react-router-dom'

const dashboardSavedVehicle = (props) => {
  return (
    <div className='dash-saved-vehicle-div'>
      <img src={props.image} />
      <div className='dash-saved-vehicle-price'>{props.price}</div>
      <div className='flex-center'>
        <button className='specs-button' onClick={props.click}>view specs</button>
      </div>
      <div className='flex-center'>
        <NavLink to='/accessories' className='dash-nav'>
          <button className='view-accessories-button'>view accessories</button>
        </NavLink>
      </div>
    </div>
  )
}

export default dashboardSavedVehicle

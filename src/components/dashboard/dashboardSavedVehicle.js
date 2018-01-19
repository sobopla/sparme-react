import React from 'react'

const dashboardSavedVehicle = (props) => {
  return (
    <div className='dash-saved-vehicle-div'>
      <img src={props.image} />
      <div className='dash-saved-vehicle-price'>{props.price}</div>
      <div className='flex-center'>
        <button className='specs-button'>view specs</button>
      </div>
      <div className='flex-center'>
        <button className='view-accessories-button'>view accessories</button>
      </div>
    </div>
  )
}

export default dashboardSavedVehicle

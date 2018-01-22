import React from 'react'
import DashboardSavedVehicle from './dashboardSavedVehicle'

// refactor to map over array with vehicles

const dashboardSavedVehicles = (props) => {
  return (
    <div className='dash-saved-vehicles-wrapper'>
      <div className='dash-saved-vehicles-header'>Saved Vehicles </div>
      <div className='flex-media'>
        <DashboardSavedVehicle
          image='https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg'
          price='$14,000' />
        <DashboardSavedVehicle
          image='https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg'
          price='$14,000' />
        <DashboardSavedVehicle
          image='https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg'
          price='$14,000' />
      </div>
    </div>
  )
}

export default dashboardSavedVehicles

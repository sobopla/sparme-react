import React from 'react'
import DashboardSavedVehicle from './dashboardSavedVehicle'

//placeholder for saved vehicles data
const savedVehiclesArray = [
  {
    image: 'https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg',
    price: '$14,000'
  },
  {
    image: 'https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg',
    price: '$15,000'
  },
  {
    image: 'https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg',
    price: '$16,000'
  }
]

const savedVehiclesList = savedVehiclesArray.map(vehicle => {
  return <DashboardSavedVehicle image={vehicle.image} price={vehicle.price} />
})

const dashboardSavedVehicles = (props) => {
  return (
    <div className='dash-saved-vehicles-wrapper'>
      <div className='dash-saved-vehicles-header'>Saved Vehicles </div>
      <div className='flex-media'>
        {savedVehiclesList}
      </div>
    </div>
  )
}

export default dashboardSavedVehicles

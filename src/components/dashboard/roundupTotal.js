import React from 'react'
import RoundupTotal from './roundup'

//placeholder appt info
const appointmentData = [
  {
    vehicle: 'Honda Fit',
    image: 'https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2018-LARGE-HONDA-FIT.jpeg',
    date: 'February 2',
    time: '4:00pm',
    dealership: 'Truck City Ford Marc',
    concierge: 'Josh',
    address: '15301 1-35 South, Buda, TX 78610'
  },
]

const appointments = appointmentData.map((appt, index) => {
  return <RoundupTotal
            key={index}
            image={appt.image}
            vehicle={appt.vehicle}
            date={appt.date}
            time={appt.time}
            dealership={appt.dealership}
            concierge={appt.concierge}
            address={appt.address}
            />
})

const roundupTotal = (props) => {
  return (
    <div className='upcoming-appointments-wrapper flex-center'>
      <div className='upcoming-appointments'>
        <div className='upcoming-appointments-header'>Total Donated</div>
        {appointments}
      </div>
    </div>
  )
}

export default roundupTotal

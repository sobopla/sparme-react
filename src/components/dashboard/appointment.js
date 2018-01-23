import React from 'react'

const appointment = (props) => {
  return (
    <div className='flex-media appointment'>
      <img src={props.image} alt={props.vehicle} />
      <div>
        <div
          className='appt-info'
          style={{fontWeight: 'bold'}}
          >Test Drive a {props.vehicle} with {props.concierge}</div>
        <div className='appt-info'>{props.date} at {props.time}</div>
        <div className='appt-info'>{props.dealership}</div>
        <div className='appt-info'>{props.address}</div>
      </div>
    </div>
  )
}

export default appointment

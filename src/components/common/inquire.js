import React from 'react'
import { NavLink } from 'react-router-dom'

const inquire = (props) => {
  return (
    <div className='flex-center inquire' >
      <div className='inquire-buttons'>
          <button
            className='inquire-button'
            onClick={props.modalClosed}
                >Set Appointment
          </button>
          <button
            className='inquire-button'
            onClick={props.modalClosed}>
              Contact Dealer
          </button>
          <button
            to='/finance'
            className='inquire-button'
            onClick={props.modalClosed}>
            <NavLink to='/finance' className='inquire-navlink'>View Financing</NavLink>
          </button>
      </div>
    </div>
  )
}

export default inquire

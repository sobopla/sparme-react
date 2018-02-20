import React from 'react'
import { NavLink } from 'react-router-dom'

const hooray = (props) => {
  return (
    <div className='hooray flex-center' >
      <h1>HOORAY!</h1>
      <h3>Welcome to how2car, NAME</h3>
      <div className='flex-media'>
        <NavLink to='/donate'>
          <button
            className='basic-button green2-border'
            onClick={props.modalClosed}
              >Make a donation</button>
        </NavLink>
        <NavLink to='/dashboard'>
          <button
            className='basic-button green2-border'
            onClick={props.modalClosed}>
            Start sparing your change</button>
        </NavLink>
      </div>
    </div>
  )
}

export default hooray

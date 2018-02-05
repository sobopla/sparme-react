import React from 'react'
import { NavLink } from 'react-router-dom'

const hooray = (props) => {
  return (
    <div className='hooray flex-center' >
      <h1>HOORAY!</h1>
      <h3>Welcome to how2car, NAME</h3>
      <div className='flex-media'>
        <NavLink to='/search'>
          <button
            className='basic-button green2-border'
            onClick={props.modalClosed}
              >Search Cars</button>
        </NavLink>
        <NavLink to='/home'>
          <button className='basic-button green2-border'>See How It Works</button>
        </NavLink>
      </div>
    </div>
  )
}

export default hooray

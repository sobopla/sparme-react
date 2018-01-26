import React from 'react'
import { NavLink } from 'react-router-dom'
import Confetti from 'react-confetti'

const hooray = (props) => {
  return (
    <div className='hooray flex-center' >
      <h1>HOORAY!</h1>
      <h3>Welcome to how2car, NAME</h3>
      <div className='flex-media'>
        <NavLink to='/showroom'>
          <button
            className='basic-button green2-border'
            onClick={props.modalClosed}
              >Search Cars</button>
        </NavLink>
        <NavLink to='/how-it-works'>
          <button className='basic-button green2-border'>See How It Works</button>
        </NavLink>
      </div>
    </div>
  )
}

export default hooray

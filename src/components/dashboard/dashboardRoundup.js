import React from 'react'
import { NavLink } from 'react-router-dom'
import checked from './001-checked.png'
import plus from './002-plus.png'
const roundupInformation = (props) => {
  return (
    <div className='dash-saved-roundup-div'>
      <div className='dash-roundup-details'>{props.date}</div>

      <div className='dash-roundup-roundup'>{props.roundup}</div>
      <div className='dash-roundup-details'>{props.storename + ':  ' + props.paid}</div>

      {/*CHECKBOX*/}

      <img className='dash-add-image' src={props.added ? checked : plus} onClick={()=>props.add(props.index)}/>

      <div className='flex-center'>
        <NavLink to='/accessories' className='dash-nav'>
          <button className='view-accessories-button'>placeholder</button>
        </NavLink>

      </div>


    </div>
  )
}

export default roundupInformation

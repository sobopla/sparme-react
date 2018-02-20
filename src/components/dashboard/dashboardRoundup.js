import React from 'react'
import { NavLink } from 'react-router-dom'
import checked from './001-checked.png'
import plus from './002-plus.png'
const roundupInformation = (props) => {
  return (
    <div className='transactions-div'>
      <div className='transactions-details'>{props.date}</div>

      <div className='transactions-roundup'>{props.roundup}</div>
      <div className='transactions-details'>{props.storename + ':  ' + props.paid}</div>

      {/*CHECKBOX*/}

      <img className='transactions-image' src={props.added ? checked : plus} onClick={()=>props.add(props.index)}/>
    </div>
  )
}

export default roundupInformation

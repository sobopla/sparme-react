import React from 'react'
import Checkbox from '../buttons/checkbox'

const AccountSlide = (props) => {
  return (
    <li className="accessory-slide">
      <div className="accessory-slide-div">
        <img className='accessory-bank-icon' src={props.slide.url} alt={props.slide.name} />
        <h1 className="accessory-name">{props.slide.name}</h1>
        <h2 className="accessory-price">{props.slide.price}</h2>
        <div className="flex-center">
          <Checkbox />
        </div>
      </div>
    </li>
  )
}

export default AccountSlide
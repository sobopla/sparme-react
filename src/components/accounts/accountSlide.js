import React from 'react'
import Checkbox from '../buttons/checkbox'

const AccountSlide = (props) => {
  return (
    <li className="account-slide">
      <div className="account-slide-div">
        <img className='account-bank-icon' src={props.slide.url} alt={props.slide.name} />
        <h1 className="account-name">{props.slide.name}</h1>
        <h2 className="account-price">{props.slide.price}</h2>
        <div className="flex-center">
          <Checkbox />
        </div>
      </div>
    </li>
  )
}

export default AccountSlide

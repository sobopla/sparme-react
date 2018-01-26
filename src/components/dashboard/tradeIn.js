import React from 'react'

const tradeIn = (props) => {
  return (
    <div className='trade-in-wrapper'>
      <div className='trade-in-header'>Trade In </div>
      <div className='flex-media'>
        <div className='trade-value'>
          The estimated trade in value for a (selected vehicle) is (price)
        </div>
        <div className='flex-column'>
          <button className='trade-in-button blue3'>Update Trade In Information</button>
          <button className='trade-in-button blue3'>The Ins and Outs of Trade Ins</button>
        </div>
      </div>
    </div>
  )
}

export default tradeIn

import React from 'react'
import RoundupTotal from './roundup'

const roundupTotal = (props) => {
  return (
    <div className='upcoming-appointments-wrapper flex-center'>
      <div className='upcoming-appointments'>
        <div className='upcoming-appointments-header'>Total Donated</div>
        <div className='flex-media appointment'>
          <div className='circle'>
            <div className='place'> so far </div>
            <div className='change'> $.44 </div>
            <div className='paid'> $4.56 until $5 </div>

            </div>
              <h1
                className='total-donation'>
                $50 Donated
              </h1>
            <div className = 'charities'>
              // {charities.map(charity=><div className='charity'>{charity}</div>
              // )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default roundupTotal

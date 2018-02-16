import React from 'react'

const charities = [
'Austin Pets Alive', 'Easter Seals', 'Salvation Army', 'Stop the wars', '10 Days of Code']

const roundup = (props) => {
  return (
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
          {charities.map(charity=><div className='charity'>{charity}</div>
          )}
        </div>
    </div>
  )
}

export default roundup

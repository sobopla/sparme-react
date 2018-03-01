import React from 'react'
import MyCharity from './mycharity'


const MyCharities = (props) => {
    return (
      <div className='mycharities-wrapper flex-center'>
        <div className='mycharities-div'>
          <div className='mycharities-heading'>My Nonprofits</div>
          <div className='mycharity-flex'>
            {props.charities.map((charity, index) => {
             return <MyCharity
               key={index}
               title={charity.title}
               description={charity.description}/>
           })}
          </div>
        </div>
      </div>
    )
}

export default MyCharities

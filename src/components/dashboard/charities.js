import React from 'react'
import Charity from './charity'


const Nonprofit = (props) => {
    return (
      <div className='charities-wrapper flex-center'>
        <div className='charities-div'>
          <div className='charities-heading'>Nonprofits</div>
          <div className='charity-flex'>
            {props.charities.map((nonprofit, index) => {
              return <Charity
                key={index}
                title={nonprofit.title}
                description={nonprofit.description}
                added = {nonprofit.added}
                index = {index}
                />
              })}
          </div>
        </div>
      </div>
    )
}

export default Nonprofit

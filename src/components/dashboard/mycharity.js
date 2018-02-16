import React from 'react'

const Mycharity = (props) => {
    return (
      <div className='charity-div'>
        <div className='charity-info charity-sender'>{props.title}</div>
        <div className='charity-info charity-subject'>{props.description}</div>
      </div>
    )
}

export default Mycharity

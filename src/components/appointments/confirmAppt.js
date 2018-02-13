import React from 'react'

const confirmAppt = (props) => {
  return(
    <div className='flex-center confirm-appt'>
      <div className='confirmation-info'>
        <div className='flex-center'><img src={props.image} alt='car'/></div>
        <div className='confirm-model'>{props.model}</div>
        <div className='confirm-message'>Woohoo!  Your appointment is set.</div>
        <br/>
        <br/>
        <div className='confirm-message'>We will see you on <span>{props.date}</span> at <span>{props.time}</span>
        </div>
        <div className='confirm-footnote'>
          You will receive an email confirmation and can view this information in your user dashboard.
        </div>
      </div>

    </div>
  )
}

export default confirmAppt

import React from 'react'

const Message = (props) => {
    return (
      <div
        className='message-div'
        style={{backgroundColor: props.background}}>
        <div className='message-info message-date'>{props.date}</div>
        <div className='message-info message-sender'>{props.sender}</div>
        <div className='message-info message-subject'>{props.subject}</div>
      </div>
    )
}

export default Message

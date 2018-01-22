import React from 'react'
import Message from './message'

//placeholder for messages data
const messagesArray = [
  {
    date: '2-30-2018',
    sender: 'Doug Funny',
    subject: 'RE: Test Drive'
  },
  {
    date: '2-29-2018',
    sender: 'Patty Mayonnaise',
    subject: 'RE: Honda Accord'
  },
  {
    date: '2-28-2018',
    sender: 'Brandon',
    subject: 'RE: Honda Civic'
  }
]

const messageList = messagesArray.map(message => {
  return <Message date={message.date} sender={message.sender} subject={message.subject} />
})

const Messages = (props) => {
    return (
      <div className='messages-wrapper flex-center'>
        <div className='messages-div'>
          <div className='messages-heading'>MESSAGES</div>
          {messageList}
        </div>
      </div>
    )
}

export default Messages

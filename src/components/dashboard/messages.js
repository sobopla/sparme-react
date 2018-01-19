import React from 'react'
import Message from './message'

//refactor to map over array of messages

const Messages = (props) => {
    return (
      <div className='messages-wrapper flex-center'>
        <div className='messages-div'>
          <div className='messages-heading'>MESSAGES</div>
          <Message date='2-30-2018' sender='Doug Funny' subject='RE: Test Drive'/>
          <Message date='2-30-2018' sender='Doug Funny' subject='RE: Test Drive'/>
          <Message date='2-30-2018' sender='Doug Funny' subject='RE: Test Drive'/>
          <Message date='2-30-2018' sender='Doug Funny' subject='RE: Test Drive'/>
        </div>
      </div>
    )
}

export default Messages

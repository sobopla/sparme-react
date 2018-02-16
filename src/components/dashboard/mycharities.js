import React from 'react'
import MyCharity from './mycharity'

//placeholder for Charities data
const mycharities = [
  {
    title: '10 Days of Code',
    description: 'Lorem Ipsum is simply dummy. ',
    added: false,
  },
  {
    title: 'Austin Pets Alive',
    description: 'Lorem Ipsum is simply dummy. ',
    added: false,
  },
  {
    title: 'Jr. league',
    description: 'Lorem Ipsum is simply dummy. ',
    added: false,
  }
]

const mycharityList = mycharities.map((message, index) => {


  return <MyCharity
    key={index}
    title={message.title}
    description={message.description}/>
})

const Messages = (props) => {
    return (
      <div className='mycharities-wrapper flex-center'>
        <div className='mycharities-div'>
          <div className='mycharities-heading'>My Nonprofits</div>
          <div className='mycharity-flex'>
            {mycharityList}
          </div>
        </div>
      </div>
    )
}

export default Messages

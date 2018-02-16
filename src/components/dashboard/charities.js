import React from 'react'
import Charity from './charity'

//placeholder for Charities data
const charities = [
  {
    title: 'Austin Pets Alive',
    description: 'Lorem Ipsum is simply dummy. ',
    added: false,
  },
  {
    title: 'Austin Pets Alive',
    description: 'Lorem Ipsum is simply dummy. ',
    added: false,
  },
  {
    title: 'Austin Pets Alive',
    description: 'Lorem Ipsum is simply dummy. ',
    added: false,
  },
  {
    title: 'Austin Pets Alive',
    description: 'Lorem Ipsum is simply dummy.',
    added: false,
  },
  {
    title: 'Austin Pets Alive',
    description: 'Lorem Ipsum is simply dummy. ',
    added: false,
  },
  {
    title: 'Austin Pets Alive',
    description: 'Lorem Ipsum is simply dummy. ',
    added: false,
  },
  {
    title: 'Austin Pets Alive',
    description: 'Lorem Ipsum is simply dummy. ',
    added: false,
  },
  {
    title: 'Austin Pets Alive',
    description: 'Lorem Ipsum is simply dummy.',
    added: false,
  },
  {
    title: 'Austin Pets Alive',
    description: 'Lorem Ipsum is simply dummy.',
    added: false,
  },
  {
    title: 'Austin Pets Alive',
    description: 'Lorem Ipsum is simply dummy.',
    added: false,
  },
  {
    title: 'Austin Pets Alive',
    description: 'Lorem Ipsum is simply dummy.',
    added: false,
  },
  {
    title: 'Austin Pets Alive',
    description: 'Lorem Ipsum is simply dummy.',
    added: false,
  },
  {
    title: 'Austin Pets Alive',
    description: 'Lorem Ipsum is simply dummy.',
    added: false,
  }
]

const charityList = charities.map((message, index) => {


  return <Charity
    key={index}
    title={message.title}
    description={message.description}/>
})

const Messages = (props) => {
    return (
      <div className='charities-wrapper flex-center'>
        <div className='charities-div'>
          <div className='charities-heading'>Nonprofits</div>
          <div className='charity-flex'>
            {charityList}
          </div>
        </div>
      </div>
    )
}

export default Messages

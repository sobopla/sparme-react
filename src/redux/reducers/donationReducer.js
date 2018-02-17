import { ADD_CHARITY } from '../actions/types.js'
// HARDCODE ROUNDUP DATA THAT WILL COME FROM DATABASE BACKEND API
const initialState = [
  {
    title: 'Austin Pets Alive',
    description: 'Lorem Ipsum is simply dummy. ',
    added: false,
  },
  {
    title: 'Goodwill',
    description: 'Lorem Ipsum is simply dummy. ',
    added: false,
  },
  {
    title: 'Easter Seals',
    description: 'Lorem Ipsum is simply dummy. ',
    added: false,
  },
  {
    title: 'PETA',
    description: 'Lorem Ipsum is simply dummy.',
    added: false,
  },
  {
    title: 'The Fund for Animals',
    description: 'Lorem Ipsum is simply dummy. ',
    added: false,
  },
  {
    title: 'nonprofit',
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
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHARITY:
      return state.map((nonprofit, index) => {
        if(index == action.payload)
          nonprofit.added = !nonprofit.added
        return Object.assign({}, ...nonprofit, nonprofit)
      })
      break

    default:
      return state
      break

  }
}

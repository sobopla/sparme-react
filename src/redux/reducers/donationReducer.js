import { MAKE_DONATION, UPDATE_DONATION } from '../actions/types.js'
// HARDCODE ROUNDUP DATA THAT WILL COME FROM DATABASE BACKEND API
const initialState = {
  current_investment: '$0.00',
  history: [
    {
      paid: '$5.00',
      date: '2/17/2018, 1:11:03 PM',
    },
    {
      paid: '$5.00',
      date: '2/17/2018, 1:11:03 PM',
    },
    {
      paid: '$5.00',
      date: '2/17/2018, 1:11:03 PM',
    },
    {
      paid: '$5.00',
      date: '2/17/2018, 1:11:03 PM',
    },
    {
      paid: '$5.00',
      date: '2/17/2018, 1:11:03 PM',
    },
    {
      paid: '$5.00',
      date: '2/17/2018, 1:11:03 PM',
    },
    {
      paid: '$5.00',
      date: '2/17/2018, 1:11:03 PM',
    },
  ]
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MAKE_DONATION:
      return {...state, history:[...state.history, action.payload]}
      break

    case UPDATE_DONATION:
      return {...state, current_investment:action.payload}

    default:
      return state
      break

  }
}

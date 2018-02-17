import { ADD_ROUNDUP } from '../actions/types.js'

// HARDCODE ROUNDUP DATA THAT WILL COME FROM DATABASE BACKEND API
const initialState = [  {
    paid: '$4.15',
    roundup: '$.85',
    storename: 'HEB',
    date: '2018-01-04 10:34:23',
    added: false
  },
  {
    paid: '$1.10',
    roundup: '$.90',
    storename: 'CostCo',
    date: '2018-01-04 11:34:23',
    added: false

  },
  {
    paid: '$400.50',
    roundup: '$.50',
    storename: 'Amazon',
    date: '2018-01-05 10:34:23',
    added: false
  },
  {
    paid: '$8.75',
    roundup: '$.25',
    storename: 'Petco',
    date: '2018-01-06 10:34:23',
    added: false
  },
  {
    paid: '$4.25',
    roundup: '$.75',
    storename: 'Starbucks',
    date: '2018-01-06 12:34:23',
    added: false
  },
  {
    paid: '$4.25',
    roundup: '$.75',
    storename: 'HEB',
    date: '2018-01-07 10:34:23',
    added: false
  }]
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_ROUNDUP:
			console.log(action.payload) // payload is a _conventional keyword_ that represents the state that is new in the current store
      return state.map((roundup, index) => {
        if(index == action.payload)
          roundup.added = !roundup.added
        return Object.assign({}, ...roundup, roundup)
      })

			break

		default:
			return state
			break
	}
}

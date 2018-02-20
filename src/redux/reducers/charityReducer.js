import { ADD_CHARITY } from '../actions/types.js'
// HARDCODE ROUNDUP DATA THAT WILL COME FROM DATABASE BACKEND API
const initialState = [
  {
    title: 'DaysofCode',
    description: 'Learn to code in 10 or 100 day events. ',
    added: true,
  },{
    title: 'Austin Pets Alive',
    description: 'We maintain comprehensive programs to save the animals at risk for euthanasia. ',
    added: true,
  },
  {
    title: 'Goodwill',
    description: 'Help people earn a living, improve their lives and strengthen their families and their communities. ',
    added: false,
  },
  {
    title: 'Easter Seals',
    description: 'Provides services, education and outreach so people with disabilities can live, learn, work, play in our communities. ',
    added: false,
  },
  {
    title: 'PETA',
    description: 'People for the Ethical Treatment of Animals (PETA) is the largest animal rights organization in the world.',
    added: false,
  },
  {
    title: 'The Fund for Animals',
    description: 'With your help, suffering animals can have another chance at life. Donate now!. ',
    added: false,
  },
  {
    title: 'Days of Code',
    description: 'Learn code in 10 or 100 day events. ',
    added: false,
  },
  {
    title: 'Girls Who Code',
    description: 'Girls Who Code was founded with a single mission : to close the gender gap in technology. ',
    added: false,
  },
  {
    title: 'NPR',
    description: 'Power independent journalism in your community. Donate to your NPR station.',
    added: false,
  },
  {
    title: 'Rainforest Partnership',
    description: 'Protect and regenerate rainforests by working with locals in forests to develop sustainable, empowered communities.',
    added: false,
  },
  {
    title: 'Knowbility',
    description: 'Improving technology access for millions of youth and adults with disabilities all over the world..',
    added: false,
  },
  {
    title: 'The Arc of the Capital Area',
    description: 'Provides programs and services to people with intellectual and developmental disabilities..',
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

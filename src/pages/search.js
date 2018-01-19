import React, { Component } from 'react'
import Aux from '../hoc/Aux'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import * as actions from '../redux/actions'


class Search extends Component {
  render(){
    return (
      <Aux>
        <div>Initial Search Typeform here</div>
        <div className='search-button-block'>
          <NavLink to='/advanced-search'>
            <button className='basic-button blue3'>Advanced Search</button>
          </NavLink>
          <button className='basic-button green2'>View Results</button>
        </div>
      </Aux>
    )
  }
}

// function mapStateToProps (state) {
//   return { authenticated: state.authenticated }
// }

export default connect()(Search)

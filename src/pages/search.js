import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import * as actions from '../redux/actions'


class Search extends Component {
  render(){
    return (
      <div className='search-page'>
        <div>Initial Search Typeform here</div>
        <div className='search-button-block'>
          <NavLink to='/advanced-search'>
            <button className='basic-button blue3-border'>Advanced Search</button>
          </NavLink>
          <button className='basic-button green2-border'>View Results</button>
        </div>
      </div>
    )
  }
}

// function mapStateToProps (state) {
//   return { authenticated: state.authenticated }
// }

export default connect()(Search)

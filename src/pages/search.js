import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import requireAuth from '../hoc/requireAuth'

import SearchOne from '../containers/search/basic-search'


class Search extends Component {
  submit = values => {
  // print the form values to the console
  console.log(values)
}
  render(){
    return (
      <div className='search-page'>
        <SearchOne onSubmit={this.submit}/>
      </div>
    )
  }
}

// function mapStateToProps (state) {
//   return { authenticated: state.authenticated }
// }

export default requireAuth(Search)

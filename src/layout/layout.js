import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, withRouter } from 'react-router-dom'

import Aux from '../hoc/Aux'
import Header from "../components/header"
import Auth from '../containers/auth/auth'

import Search from '../pages/search'
import Dashboard from '../pages/dashboard'
import Accessories from '../pages/accessories'
import SavedVehicles from '../pages/savedVehicles'
import Financing from '../pages/financing'

import { connect } from 'react-redux'

class Layout extends Component {
  render(){
    // console.log(this.props.authentication)
    return (
      <Aux>
        <Header />
        <Auth />
        <Route path='/search' component = {Search} />
        <Route path='/dashboard' component = {Dashboard} />
        <Route path='/accessories' component = {Accessories} />
        <Route path='/saved-vehicles' component = {SavedVehicles} />
        <Route path='/financing' component = {Financing} />
      </Aux>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    authentication: state.authentication
  };
}

export default withRouter(connect(mapStateToProps)(Layout))
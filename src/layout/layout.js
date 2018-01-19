import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Aux from '../hoc/Aux'
import Header from "../components/header"
import Auth from '../containers/auth/auth'

import Search from '../pages/search'
import AdvancedSearch from '../pages/advancedSearch'
import Dashboard from '../pages/dashboard'
import Accessories from '../pages/accessories'
import SavedVehicles from '../pages/savedVehicles'
import Financing from '../pages/financing'

class Layout extends Component {

  render(){

    return (
      <Aux>
        <Header />
        <Auth />
        <Route path='/search' component = {Search} />
        <Route path='/advanced-search' component = {AdvancedSearch} />
        <Route path='/dashboard' component = {Dashboard} />
        <Route path='/accessories' component = {Accessories} />
        <Route path='/saved-vehicles' component = {SavedVehicles} />
        <Route path='/financing' component = {Financing} />
      </Aux>
    )
  }

}

export default Layout

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import Aux from '../hoc/Aux'
import Header from "../components/header"
import Auth from '../containers/auth/auth'
import Showroom from '../containers/showroom'

class Layout extends Component {

  render(){

    return (
      <Aux>
        <Header />
        <Auth />
        <Route path='/showroom' component = {Showroom} />
      </Aux>
    )
  }

}

export default Layout

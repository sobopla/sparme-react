import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Aux from '../hoc/Aux'
import Header from "../components/header"
import Auth from '../containers/auth/auth'

class Layout extends Component {

  render(){

    return (
      <Aux>
        <Header />
        <Auth />
      </Aux>
    )
  }

}

export default Layout

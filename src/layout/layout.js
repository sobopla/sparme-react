import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeAuth } from '../redux/actions/changeAuth'

import Aux from '../hoc/Aux1'
import Header from "../components/header"
import Auth from '../containers/auth/auth'

import Search from '../pages/search'
import AdvancedSearch from '../pages/advancedSearch'
import Dashboard from '../pages/dashboard'
import Accessories from '../pages/accessories'
import Blog from '../pages/blog'
import Financing from '../pages/financing'
import Pinpoint from '../pages/pinpoint'

import firebase from '../containers/auth/firebase'

class Layout extends Component {

    logout = () => {
      firebase.auth().signOut()
      .then(() => {
        console.log('called logout from layout')
      this.props.changeAuth(false)
      })
    }

  render() {
    return (
      <Aux>
        {this.props.user ? 'hotdog' : 'not hotdog'}
        <Header logout={this.logout}/>
        {this.props.user ? 'hello, user!' : <Auth />}
        <Route path='/search' component = {Search} />
        <Route path='/advanced-search' component = {AdvancedSearch} />
        <Route path='/dashboard' component = {Dashboard} />
        <Route path='/accessories' component = {Accessories} />
        <Route path='/blog' component = {Blog} />
        <Route path='/financing' component = {Financing} />
        <Route path='/search-results' component={Pinpoint} />
      </Aux>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeAuth: changeAuth}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))

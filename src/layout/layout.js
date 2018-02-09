import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeAuth } from '../redux/actions/changeAuth'

import Aux from '../hoc/Aux1'
import Header from "../components/header"
import Auth from '../containers/auth/auth'

import Search from '../pages/search'
// import AdvancedSearch from '../pages/advancedSearch'
import Dashboard from '../pages/dashboard'
import Accessories from '../pages/accessories'
import Financing from '../pages/financing'
import Pinpoint from '../pages/pinpoint'
import Home from '../pages/home'

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
        <Header logout={this.logout} greeting={this.props.user ? 'Hi User!' : null}/>
        {this.props.user ? null : <Auth />}
        <Route path='/home' component={Home} />
        <Route path='/search' component = {Search} />
        <Route path='/dashboard' component = {Dashboard} />
        <Route path='/accessories' component = {Accessories} />
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

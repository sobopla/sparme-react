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
import Linkup from '../pages/linkup'
import Accounts from '../pages/accounts'
// import Pinpoint from '../pages/pinpoint'
import Home from '../pages/home'
import Test from '../pages/test'

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
        <Route path='/test' component={Test} />
        <Route path='/linkup' component={Linkup} />
        <Route path='/donate' component = {Search} />
        <Route path='/dashboard' component = {Dashboard} />
        
        <Route path='/accounts' component = {Accounts} />
        
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

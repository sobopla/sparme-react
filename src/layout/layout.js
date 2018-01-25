import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeAuth } from '../redux/actions/changeAuth'

import Aux from '../hoc/Aux'
import Header from "../components/header"
import Auth from '../containers/auth/auth'

import Search from '../pages/search'
import Dashboard from '../pages/dashboard'
import Accessories from '../pages/accessories'
import SavedVehicles from '../pages/savedVehicles'
import Financing from '../pages/financing'

import firebase from '../containers/auth/firebase'

class Layout extends Component {
    constructor(props) {
      super(props)
      this.state = {isLoggedIn: false}
    }

    // firebase.auth().onAuthStateChanged(user => {
    //   if(user) {
    //     console.log('you are logged in now!')
    //     this.setState({isLoggedIn: true})
    //   }
    //   else {
    //     console.log("not logged in")
    //     this.setState({isLoggedIn: false})
    //   }
    // })

    // componentWillMount() {
    //   console.log('ok. will mount')
    // }

    logout = () => {
      firebase.auth().signOut()
      .then(() => {
        console.log('called logout from layout')
      this.props.changeAuth(false)
      })
    }

    // componentWillMount

  render() {
    return (
      <Aux>
        {this.props.user ? 'hotdog' : 'not hotdog'}
        <Header logout={this.logout}/>
        {this.props.user ? 'hello, user!' : <Auth />}
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
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeAuth: changeAuth}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))
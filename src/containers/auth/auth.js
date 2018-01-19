import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Modal from '../../UI/Modal/Modal'
import Register from './register'
import SignIn from './signIn'
import Hooray from '../../components/auth/hooray'

import {auth, providers} from './firebase.js';

class Auth extends Component {
  state = {
    registration: true,
    signIn: false,
    hooray: false,
    confirm: false
  }

  removeModalHandler = () => {
    this.setState({
      registration: false,
      signIn: false,
      hooray: false,
      confirm: false
    })
  }

  hoorayHandler = () => {
    this.setState({registration: false, hooray: true})
  }

  signInHandler = () => {
    this.setState({registration: false, signIn: true})
  }

  authenticationHandler = () => {
    this.setState({
      registration: false,
      signIn: false,
      hooray: false,
      confirm: false
    })
  }

  googleAuth = () => {
    console.log('ok')
    auth.signInWithPopup(providers['google'])
      .then((result) => {
        console.log(result.user)
      })
  }

  facebookAuth = () => {
    console.log('fb')
    auth.signInWithPopup(providers['facebook'])
      .then((result) => {
        console.log(result.user)
      })
  }

  render(){

    return (
      <Aux>
        <Modal show={this.state.registration}
               modalClosed={this.removeModalHandler}>
          <Register showHoorayModal={this.hoorayHandler}
                    showSignInModal = {this.signInHandler}
                    googleAuth= {this.googleAuth}
                    facebookAuth= {this.facebookAuth}
                  />
        </Modal>
        <Modal show={this.state.hooray}
               modalClosed={this.removeModalHandler}
               makeConfetti={true}
               >
          <Hooray modalClosed={this.removeModalHandler}/>
        </Modal>
        <Modal show={this.state.signIn}
               modalClosed={this.removeModalHandler}
               >
          <SignIn modalClosed={this.removeModalHandler}
                  clickToAuthenticate={this.authenticationHandler}/>
        </Modal>
      </Aux>
    )
  }

}

export default Auth

import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Modal from '../../UI/Modal/Modal'
import Register from './register'
import SignIn from './signIn'
import Hooray from '../../components/auth/hooray'

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

  render(){

    return (
      <Aux>
        <Modal show={this.state.registration}
               modalClosed={this.removeModalHandler}>
          <Register showHoorayModal={this.hoorayHandler}
                    showSignInModal = {this.signInHandler}
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

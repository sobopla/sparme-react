import React, { Component } from 'react'

import Aux from '../../hoc/Aux1'
import Modal from '../../UI/Modal/Modal'
import Register from './register'
import SignIn from './signIn'
import Hooray from '../../components/auth/hooray'

import {auth, providers} from './firebase.js';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeAuth } from '../../redux/actions/changeAuth'

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

  authProviderPopup = (prov) => {
    auth.signInWithPopup(providers[prov])
      .then((result) => {
        console.log(result.user)
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        this.props.changeAuth(result.user)
      })
  }

  render(){

    return (
      <Aux>
        <Modal show={this.state.registration}
               modalClosed={this.removeModalHandler}>
          <Register showHoorayModal={this.hoorayHandler}
                    showSignInModal = {this.signInHandler}
                    popupCallback = {this.authProviderPopup} />
        </Modal>
        <Modal show={this.state.hooray}
               modalClosed={this.removeModalHandler}
               // makeConfetti={true}
               transparent={true}
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

function mapStateToProps(state) {
  return {
    text: state.text.value,
    results: state.results,
    authentication: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeAuth: changeAuth}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
// export default Auth

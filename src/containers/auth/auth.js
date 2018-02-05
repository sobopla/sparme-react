import React, { Component } from 'react'

import Aux from '../../hoc/Aux1'
import Modal from '../../UI/Modal/Modal'
import ConfettiModal from '../../UI/Modal/ConfettiModal'
import Register from './register'
import SignIn from './signIn'
import Hooray from '../../components/auth/hooray'

import firebase, {auth, providers} from './firebase.js';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeAuth } from '../../redux/actions/changeAuth'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registration: true,
      signIn: false,
      hooray: false,
      confirm: false
    }
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
    auth.signInWithPopup(providers[prov]).catch(function(error) {
      console.log(error.code)
      console.log(error.message)
    })
      .then((result) => {
        this.props.changeAuth(true)
      })
      this.removeModalHandler()
  }

  logout = () => {
    firebase.auth().signOut()
    console.log('called logout from auth.js')
    this.setState({registration: true})
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
        <ConfettiModal show={this.state.hooray}
               modalClosed={this.removeModalHandler}
               >
          <Hooray modalClosed={this.removeModalHandler}/>
        </ConfettiModal>
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
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeAuth: changeAuth}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
// export default Auth

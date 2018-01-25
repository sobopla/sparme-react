import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Modal from '../../UI/Modal/Modal'
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

  // componentDidMount() {
  //   if(auth.currentUser) {
  //     this.removeModalHandler()
  //     this.props.changeAuth(true)
  //   }
  //   else {
  //     this.props.changeAuth(false)
  //   }
  // }

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

function mapStateToProps(state) {
  return {
    text: state.text.value,
    results: state.results,
    authentication: state.authentication
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeAuth: changeAuth}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
// export default Auth

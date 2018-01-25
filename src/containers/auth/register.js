import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import { connect } from 'react-redux'

import {auth} from './firebase.js'


class register extends Component {

  clickToRegister = () => {
    auth.createUserWithEmailAndPassword(this.email.value, this.password.value).catch(function(error) {
      console.log(error.code)
      console.log(error.message)
    })

    console.log(this.username.value);
    this.props.showHoorayModal()
    //this.props.authenticate(true)
  }

  render(){
    return (
      <Aux>
        <div className='flex-media register'>
          <div className='flex-column'>
            <div className='wide-button fb-blue' onClick={this.props.popupCallback.bind(null, 'facebook')}>Sign in with Facebook</div>
            <div className='wide-button google-red' onClick={this.props.popupCallback.bind(null, 'google')}>Sign in with Google</div>
            <p>Already have an account?</p>
            <button className='basic-button blue3'
              onClick={this.props.showSignInModal}>Sign In</button>
          </div>
          <div className='flex-column'>
            <input type='text' placeholder='Full Name' ref={(input) => {this.username = input;}}/>
            <input type='text' placeholder='email' ref={(input) => {this.email = input;}}/>
            <input type='password' placeholder='password' ref={(input) => {this.password = input;}}/>
            <input type='password' placeholder='confirm password' ref={(input) => {this.passwordConfirm = input;}}/>
            <button
              className='basic-button green2'
              onClick={this.clickToRegister}
              >Register</button>
          </div>
        </div>
      </Aux>
    )
  }
}



//export default connect(mapStateToProps, mapDispatchToProps)(register)
export default register
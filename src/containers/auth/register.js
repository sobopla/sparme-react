import React, { Component } from 'react'
import Aux from '../../hoc/Aux1'
import {NavLink} from 'react-router-dom'

import {auth} from './firebase.js'
import { bindActionCreators } from 'redux'
import { changeAuth } from '../../redux/actions/changeAuth'
import { connect } from 'react-redux'


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

  clickToSignIn = () => {
    console.log('signInWithEmailAndPassword')
    auth.signInWithEmailAndPassword(this.email.value, this.password.value).catch(function(error) {
      console.log(error.code)
      console.log(error.message)
    })
    .then(() => {
      console.log(auth.currentUser)
      this.props.changeAuth(true)
    })
  }

  render(){
    return (
      <Aux>
        <div className='flex-media register'>
          <div className='flex-column'>
            <h3>Nice to see you!</h3>
            <input placeholder='email' ref={(input) => {this.email = input}} />
            <input placeholder='password' ref={(input) => {this.password = input}} />
            <NavLink to='/dashboard'>
              <button
                className='basic-button green2'
                onClick={this.clickToSignIn}
                >Sign In</button>
            </NavLink>
          </div>
          <div className='flex-column'>
            <input type='text' placeholder='Full Name' ref={(input) => {this.username = input;}}/>
            <input type='text' placeholder='email' ref={(input) => {this.email = input;}}/>
            <input type='password' placeholder='password' ref={(input) => {this.password = input;}}/>
            <input type='password' placeholder='confirm password' ref={(input) => {this.passwordConfirm = input;}}/>
            <button
              className='basic-button green2-border'
              onClick={this.clickToRegister}
              >Register</button>
          </div>
        </div>
      </Aux>
    )
  }
}


function mapStateToProps (state) {
  return { user: state.user }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeAuth: changeAuth}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(register)

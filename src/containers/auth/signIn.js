import React, { Component } from 'react'
import Aux from '../../hoc/Aux1'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {auth} from './firebase.js'
import { bindActionCreators } from 'redux'
import { changeAuth } from '../../redux/actions/changeAuth'

class signIn extends Component {

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
            <NavLink to='/home'>
              <button
                className='basic-button green2'
                onClick={this.clickToSignIn}
                >Sign In</button>
            </NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(signIn)

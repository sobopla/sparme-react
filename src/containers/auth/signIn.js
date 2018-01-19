import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {auth} from './firebase.js'
// import * as actions from '../../redux/actions'

class signIn extends Component {

  clickToSignIn = () => {
    console.log('signInWithEmailAndPassword')
    auth.signInWithEmailAndPassword(this.email.value, this.password.value).catch(function(error) {
      console.log(error.code)
      console.log(error.message)
    })
    console.log(auth.currentUser)
    //this.props.authenticate(true)
  }

  render(){
    return (
      <Aux>
        <div className='flex-media register'>
          <div className='flex-column'>
            <h3>Nice to see you!</h3>
            <input placeholder='email' ref={(input) => {this.email = input}} />
            <input placeholder='password' ref={(input) => {this.password = input}} />
            <NavLink to='/showroom'>
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

// function mapStateToProps (state) {
//   return { authenticated: state.authenticated }
// }

export default connect()(signIn)

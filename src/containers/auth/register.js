import React, { Component } from 'react'
import Aux from '../../hoc/Aux'

class register extends Component {
  render(){
    return (
      <Aux>
        <div className='flex-media register'>
          <div className='flex-column'>
            <div className='wide-button fb-blue'>Sign in with Facebook</div>
            <div className='wide-button google-red'>Sign in with Google</div>
            <p>Already have an account?</p>
            <button className='basic-button blue3'>Sign In</button>
          </div>
          <div className='flex-column'>
            <input placeholder='Full Name'/>
            <input placeholder='email' />
            <input placeholder='password' />
            <input placeholder='confirm password' />
            <button
              className='basic-button green2'
              onClick={this.props.clickToRegister}
              // onClick={this.props.confetti}
              >Register</button>
          </div>
        </div>
      </Aux>
    )
  }
}

export default register

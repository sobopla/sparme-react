import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import { connect } from 'react-redux'
// import * as actions from '../../redux/actions'

class register extends Component {

  clickToRegister = () => {
    console.log(this.username.value);
    this.props.clickToRegister()
    //this.props.authenticate(true)
  }

  render(){
    return (
      <Aux>
        <div className='flex-media register'>
          <div className='flex-column'>
            <div className='wide-button fb-blue'>Sign in with Facebook</div>
            <div className='wide-button google-red'>Sign in with Google</div>
            <p>Already have an account?</p>
            <button className='basic-button blue3'
                    onClick={this.props.clickToSignIn}>Sign In</button>
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

// function mapStateToProps (state) {
//   return { authenticated: state.authenticated }
// }

export default connect()(register)

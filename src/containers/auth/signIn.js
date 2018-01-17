import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import * as actions from '../../redux/actions'

class signIn extends Component {
  render(){
    return (
      <Aux>
        <div className='flex-media register'>
          <div className='flex-column'>
            <h3>Nice to see you!</h3>
            <input placeholder='email' />
            <input placeholder='password' />
            <NavLink to='/showroom'>
              <button
                className='basic-button green2'
                onClick={this.props.clickToAuthenticate}
                // onClick={()=>this.props.authenticate(true)}
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

import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Modal from '../../UI/Modal/Modal'
import Register from './register'
import Hooray from '../../components/auth/hooray'

class Auth extends Component {
  state = {
    registration: true,
    signIn: false,
    hooray: false,
    confirm: false
  }

  removeModalHandler = (modalType) => {
    this.setState({registration: false})
  }

  hoorayHandler = () => {
    this.setState({hooray: true})
  }

  switchModalHandler = () => {
    this.setState({registration: false, hooray: true})
  }

  render(){

    return (
      <Aux>
        <Modal show={this.state.registration}
               modalClosed={()=>this.removeModalHandler('registration')}>
          <Register clickToRegister={() => this.switchModalHandler()}
                    // confetti={this.props.makeConfetti}
                  />
        </Modal>
        <Modal show={this.state.hooray}
               modalClosed={()=>this.removeModalHandler('hooray')}
               >
          <Hooray/>
        </Modal>
      </Aux>
    )
  }

}

export default Auth

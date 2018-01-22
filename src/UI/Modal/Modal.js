//reusable Modal Component takes a child with content
//used for auth - takes register, sign in, and hooray components as children
//can be reused for other parts of the app

import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {

  shouldComponentUpdate ( nextProps, nextState ) {
    return nextProps.show !== this.props.show
  }

  render(){

    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} confetti={this.props.makeConfetti}/>
          <div className='modal'
            style={{
              transform: this.props.show ? 'translateX(0)' :'translateX(100vw)',
              opacity: this.props.show ? '1' : '0'
            }}>
          {this.props.children}
        </div>
      </Aux>
  )
  }

}

export default Modal

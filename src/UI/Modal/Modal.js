//reusable Modal Component takes a child with content
//used for auth - takes register, sign in, and hooray components as children
//can be reused for other parts of the app

import React, { Component } from 'react'
import Aux from '../../hoc/Aux1'
import Backdrop from '../Backdrop/Backdrop'
import TransparentBackdrop from '../Backdrop/TransparentBackdrop'

class Modal extends Component {

  shouldComponentUpdate ( nextProps, nextState ) {
    return nextProps.show !== this.props.show
  }

  render(){
    //backdrop with blue gradient, can show confetti
    let backdrop = <Backdrop show={this.props.show} clicked={this.props.modalClosed} confetti={this.props.makeConfetti}/>

    //transparent black backdrop
    if (this.props.transparent) {
      backdrop = <TransparentBackdrop show={this.props.show} clicked={this.props.modalClosed} />
    }

    return (
      <Aux>
          {backdrop}
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

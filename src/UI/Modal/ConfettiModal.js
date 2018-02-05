//reusable Modal Component takes a child with content
//used for auth - takes register, sign in, and hooray components as children
//can be reused for other parts of the app

import React, { Component } from 'react'
import Aux from '../../hoc/Aux1'
import ConfettiBackdrop from '../Backdrop/ConfettiBackdrop'

class ConfettiModal extends Component {

  shouldComponentUpdate ( nextProps, nextState ) {
    return nextProps.show !== this.props.show
  }

  render(){
    return (
      <Aux>
          <ConfettiBackdrop show={this.props.show} clicked={this.props.modalClosed}/>
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

export default ConfettiModal

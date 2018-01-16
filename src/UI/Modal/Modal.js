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
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
          <div className='modal'
            style={{
              transform: this.props.show ? 'translateX(0)' :'translateX(100vh)',
              opacity: this.props.show ? '1' : '0'
            }}>
          {this.props.children}
        </div>
      </Aux>
  )
  }

}

export default Modal

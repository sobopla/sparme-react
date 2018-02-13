import React, {Component} from 'react'
import Inquire from '../components/common/inquire'
import Modal from '../UI/Modal/Modal'

class Test extends Component {
  state = {
    seeModal: false
  }
  render(){
  return (
    <div style={{paddingTop: '150px'}}>
      <button onClick={()=> this.setState({seeModal: true})}>see modal</button>
      <div>
        <Modal
          show={this.state.seeModal}
          transparent={true}
          modalClosed={()=>this.setState({seeModal: false})}>
          <Inquire/>
        </Modal>
      </div>

    </div>
  )}
}

export default Test

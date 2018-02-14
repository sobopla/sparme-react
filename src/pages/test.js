import React, {Component} from 'react'
import Inquire from '../components/appointments/inquire'
import Modal from '../UI/Modal/Modal'
import SeeAppt from '../containers/appointments/setAppt'
import ConfirmAppt from '../components/appointments/confirmAppt'

class Test extends Component {
  state = {
    seeInquireModal: false,
    seeApptModal: false,
    confirmApptModal: false
  }
  render(){
  return (
    <div style={{paddingTop: '150px'}}>
      <button
        className='basic-button blue3-border'
        onClick={()=> this.setState({seeInquireModal: true})}>see inquire modal</button>
      <button
        className='basic-button blue3-border'
        onClick={()=> this.setState({seeApptModal: true})}>see appointment modal</button>
        <button
          className='basic-button blue3-border'
          onClick={()=> this.setState({confirmApptModal: true})}>confirm appointment modal</button>
      <div>
        <Modal
          show={this.state.seeInquireModal}
          transparent={true}
          modalClosed={()=>this.setState({seeInquireModal: false})}>
          <Inquire/>
        </Modal>
        <Modal
          show={this.state.seeApptModal}
          transparent={true}
          modalClosed={()=>this.setState({seeApptModal: false})}>
          <SeeAppt
            image={'https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg'}
            model={'Honda Accord'}
            dealer={'Truck City Ford'}
          />
        </Modal>
        <Modal
          show={this.state.confirmApptModal}
          transparent={true}
          modalClosed={()=>this.setState({confirmApptModal: false})}>
          <ConfirmAppt
            date={'Saturday, January 20'}
            time={'4:00pm'}
            image={'https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg'}
            model={'Honda Accord'}
          />
        </Modal>
      </div>

    </div>
  )}
}

export default Test

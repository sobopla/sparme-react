import React from 'react'
import Inquire from './inquire'
import Modal from '../../UI/Modal/Modal'
import SetAppt from '../../containers/appointments/setAppt'
import ConfirmAppt from './confirmAppt'

const appointmentModals = (props) => {
  return (
    <div>
      <Modal
        show={props.showInquire}
        transparent={true}
        modalClosed={props.modalClosed}>
        <Inquire setAppt={props.goToSetApptModal}/>
      </Modal>
      <Modal
        show={props.showSetAppt}
        transparent={true}
        modalClosed={props.modalClosed}>
        <SetAppt
          image={'https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg'}
          model={'Honda Accord'}
          dealer={'Truck City Ford'}
          click={props.goToConfirmApptModal}
        />
      </Modal>
      <Modal
        show={props.showConfirmAppt}
        transparent={true}
        modalClosed={props.modalClosed}>
        <ConfirmAppt
          date={'Saturday, January 20'}
          time={'4:00pm'}
          image={'https://s3.amazonaws.com/assets.how2car/images/Honda/Model/2017+Accord+Coupe.jpg'}
          model={'Honda Accord'}
        />
      </Modal>
    </div>
  )
}

export default appointmentModals

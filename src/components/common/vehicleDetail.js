import React, { Component } from 'react'
import AppointmentModals from '../appointments/appointmentModals'
import Snackbar from 'material-ui/Snackbar'

class VehicleDetail extends Component {
  state = {
    inquireModal: false,
    setApptModal: false,
    confirmApptModal: false,
    snackbar: false
  }
  saveVehicle = () => {
    this.setState({snackbar: true})
  }

  render(){

    return (
      <div className='vehicle-detail-wrapper'>
        <div className='vehicle-detail flex-media'>
          <div className='flex-center'>
            <div className='main-info'>
              <div className='flex-center'><img src={this.props.image}/></div>
              <h1>{this.props.name}</h1>
              <h2>{this.props.price}</h2>
            </div>
          </div>

          <div className='vehicle-specs'>
            <div className='spec-heading'>Vehicle Specifications</div>
            <div className='specs flex-media'>
              <div className='spec-names border-left'>
                <div className='spec-name'>Vin</div>
                <div className='spec-name'>Exterior Color</div>
                <div className='spec-name'>Interior</div>
                <div className='spec-name'>Engine</div>
                <div className='spec-name'>Transmission</div>
                <div className='spec-name'>Drive</div>
                <div className='spec-name'>MPG</div>
              </div>
              <div className='spec-names'>
                <div className='spec-name'>{this.props.vin}</div>
                <div className='spec-name'>{this.props.extColor}</div>
                <div className='spec-name'>{this.props.intColor}</div>
                <div className='spec-name'>{this.props.engine}</div>
                <div className='spec-name'>{this.props.transmission}</div>
                <div className='spec-name'>{this.props.drive}</div>
                <div className='spec-name'>{this.props.mpg}</div>
              </div>
            </div>
          </div>
        </div>
        <div className='detail-buttons flex-media'>
          <div className='green-buttons flex-media'>
            <div className='basic-button green2-border green-button'
                 onClick={this.saveVehicle}>Save</div>
            <div className='basic-button green2-border green-button'>Compare</div>
            <div className='basic-button green2-border green-button'
                 onClick={()=>this.setState({inquireModal: true})}>Ask Question</div>
          </div>
          <div className='wide-button test-drive-button'
               onClick={()=> this.setState({setApptModal: true})}>Schedule Test Drive</div>
        </div>
        <AppointmentModals
          showInquire = {this.state.inquireModal}
          showSetAppt = {this.state.setApptModal}
          showConfirmAppt = {this.state.confirmApptModal}
          modalClosed = {() => this.setState({inquireModal: false, setApptModal: false, confirmApptModal: false})}
          goToSetApptModal={()=>this.setState({inquireModal: false, setApptModal: true, confirmApptModal: false})}
          goToConfirmApptModal={()=>this.setState({inquireModal: false, setApptModal: false, confirmApptModal: true})}
        />
        <Snackbar
          open={this.state.snackbar}
          message="Vehicle saved to your dashboard"
          autoHideDuration={4000}
          onRequestClose={()=>this.setState({snackbar: false})}
          contentStyle={{textAlign: 'center', fontSize: '16px', fontFamily: 'Open Sans, sans-serif'}}
          bodyStyle={{backgroundColor: '#99cb57'}}
        />
      </div>
    )
  }
}

export default VehicleDetail

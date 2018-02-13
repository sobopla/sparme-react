import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { times, addDates } from './dates'

const dates = []

class setAppt extends Component {
  state = {
    date: null,
    time: null,
    dealer: this.props.dealer
  };

  componentWillMount(){
    addDates(dates)
  }

  menuItems = (values, data) => {
    return data.map((value) => (
      <MenuItem
        key={value}
        insetChildren={true}
        value={value}
        primaryText={value}
      />
    ));
  }

  render(){
    const { time, date } = this.state
    return(
      <div className='flex-media' className='set-appt'>
        <div className='flex-center'>
          <div className='flex-column'>
            <div className='appt-car flex-center'>
              <img src={this.props.image} alt='car'/>
              <div className='appt-car-heading'>{this.props.model}</div>
            </div>
            <button className='basic-button red-border'>Get Me In Now</button>
          </div>
          <div className='flex-column' style={{marginLeft: '40px'}}>
            <div className='appt-field'>
              <SelectField
                hintText="Select a Date"
                value={this.state.date}
                onChange={(event, index, date) => this.setState({date})}
              >
                {this.menuItems(date, dates)}
              </SelectField>
            </div>
            <div className='appt-field'>
              <SelectField
                hintText="Select a Time"
                value={this.state.time}
                onChange={(event, index, time) => this.setState({time})}
              >
                {this.menuItems(time, times)}
              </SelectField>
            </div>

            <button className='basic-button green2-border'>Make Appointment</button>
          </div>
        </div>
      </div>
    )
  }
}

export default setAppt

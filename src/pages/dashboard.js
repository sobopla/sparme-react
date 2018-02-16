import React from 'react'
import RoundupTotal from '../components/dashboard/roundupTotal'
import DashboardRoundups from '../containers/dashboard/dashboardRoundups'
import Charities from '../components/dashboard/charities'
import Mycharities from '../components/dashboard/mycharities'

import requireAuth from '../hoc/requireAuth'
import { connect } from 'react-redux' //Allows state into the dashboard

const Dashboard = (props) => {
    return (
      <div>
        <RoundupTotal roundups={props.roundups} charities={props.charities}/>
        <DashboardRoundups/>
        <Mycharities/>
        <Charities charities={props.charities}/>
      </div>
    )
}

function mapStateToProps(state){
  return {
    roundups: state.roundup,
    charities: state.charity
  }
}

export default requireAuth(connect(mapStateToProps)(Dashboard))

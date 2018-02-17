import React from 'react'
import RoundupTotal from '../components/dashboard/roundupTotal'
import DashboardRoundups from '../containers/dashboard/dashboardRoundups'
import Charities from '../components/dashboard/charities'
import MyCharities from '../components/dashboard/mycharities'

import requireAuth from '../hoc/requireAuth'
import { connect } from 'react-redux' //Allows state into the dashboard

const Dashboard = (props) => {
    return (
      <div>
        <RoundupTotal roundups={props.roundups} charities={props.charities} donations={props.donations}/>
        <DashboardRoundups/>
        <MyCharities charities = {props.charities.filter(chrt=> chrt.added==true)}/>
        <Charities charities={props.charities}/>
      </div>
    )
}

function mapStateToProps(state){
  return {
    roundups: state.roundup,
    charities: state.charity,
    donations: state.donation
  }
}

export default requireAuth(connect(mapStateToProps)(Dashboard))

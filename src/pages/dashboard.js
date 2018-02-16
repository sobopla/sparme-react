import React from 'react'
import RoundupTotal from '../components/dashboard/roundupTotal'
import DashboardRoundups from '../containers/dashboard/dashboardRoundups'
import Charities from '../components/dashboard/charities'
import Mycharities from '../components/dashboard/mycharities'

import requireAuth from '../hoc/requireAuth'

const Dashboard = () => {
    return (
      <div>
        <RoundupTotal/>
        <DashboardRoundups/>
        <Mycharities/>
        <Charities/>
      </div>
    )
}

export default requireAuth(Dashboard)

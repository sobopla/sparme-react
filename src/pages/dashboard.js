import React from 'react'
import UpcomingAppointments from '../components/dashboard/upcomingAppointments'
import DashboardSavedVehicles from '../containers/dashboard/dashboardSavedVehicles'
import TradeIn from '../components/dashboard/tradeIn'
import Messages from '../components/dashboard/messages'
import requireAuth from '../hoc/requireAuth'

const Dashboard = () => {
    return (
      <div>
        <UpcomingAppointments/>
        <DashboardSavedVehicles/>
        <TradeIn/>
        <Messages/>
      </div>
    )
}

export default requireAuth(Dashboard)

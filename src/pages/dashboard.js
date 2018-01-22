import React, { Component } from 'react'
import UpcomingAppointments from '../components/dashboard/upcomingAppointments'
import DashboardSavedVehicles from '../components/dashboard/dashboardSavedVehicles'
import TradeIn from '../components/dashboard/tradeIn'
import Messages from '../components/dashboard/messages'

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

export default Dashboard
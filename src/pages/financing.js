import React from 'react'
import requireAuth from '../hoc/requireAuth'

const Financing = () => {
  return (
    <div>
      <div>Financing </div>
    </div>
  )
}

export default requireAuth(Financing)

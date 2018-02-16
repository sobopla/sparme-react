import React from 'react'
import requireAuth from '../hoc/requireAuth'

const Accounts = () => {
  return (
    <div>
      <div>Link accounts page </div>
    </div>
  )
}

export default requireAuth(Accounts)

import React from 'react'
import requireAuth from '../hoc/requireAuth'
import AccountsBlock from '../containers/accounts/accounts-container'

const Accounts = () => {
	//API CALL TO THE BACKEND TO GET THE ACCOUNTS PULLED IN
  return (
		<div>
			<div className='accessory-search-bar'>
				<label className='accessory-label'>search banks to add</label>
				<input className='accessory-search' type='text' ref={(input) => {this.searchValue = input;}}/>
			</div>
      <AccountsBlock />
			<div className='flex-center'>
				<button className='basic-button blue3-border'>UNLINK SELECTED ACCOUNTS</button>
			</div>
		</div>
	)
}

export default requireAuth(Accounts)

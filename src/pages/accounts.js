import React from 'react'
import requireAuth from '../hoc/requireAuth'
import AccountsBlock from '../containers/accounts/accounts-container'

const Accounts = () => {
	//API CALL TO THE BACKEND TO GET THE ACCOUNTS PULLED IN
  return (
		<div style={{textAlign:'center'}}>
			<div className='account-search-bar'>
				<label className='account-label'>search banks to add</label>
				<input className='account-search' type='text' ref={(input) => {this.searchValue = input;}}/>
			</div>
      <AccountsBlock />
			<div className='flex-center'>
				<button className='basic-button blue3-border'>UNLINK SELECTED ACCOUNTS</button>
			</div>
		</div>
	)
}

export default requireAuth(Accounts)

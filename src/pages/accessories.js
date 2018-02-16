import React from 'react'
import AccessoriesBlock from '../containers/accessories/accessories-block'
import requireAuth from '../hoc/requireAuth'

const Accessories = () => {
	return (
		<div>
			<div className='accessory-search-bar'>
				<label className='accessory-label'>search banks to add</label>
				<input className='accessory-search' type='text' ref={(input) => {this.searchValue = input;}}/>
			</div>
      <AccessoriesBlock />
			<div className='flex-center'>
				<button className='basic-button blue3-border'>UNLINK SELECTED ACCOUNTS</button>
			</div>
		</div>
	)
}

export default requireAuth(Accessories)

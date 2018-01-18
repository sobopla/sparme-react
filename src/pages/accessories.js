import React from 'react'
import AccessoriesBlock from '../containers/accessories/accessories-block'

const Accessories = () => {
	return (
		<div>
      <h1 className='accessories-header'>Go wild.  You Deserve an Upgrade.</h1>
			<div className='flex-center'>
				<label className='accessory-label'>search by keyword</label>
				<input className='accessory-search' type='search' />
			</div>
      <AccessoriesBlock />
			<div className='flex-center'>
				<button className='basic-button blue3'>Select These Accessories</button>
			</div>
		</div>
	)
}

export default Accessories

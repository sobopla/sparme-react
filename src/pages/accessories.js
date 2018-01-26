import React from 'react'
import AccessoriesBlock from '../containers/accessories/accessories-block'

const Accessories = () => {
	return (
		<div>
			<div className='accessory-search-bar'>
				<label className='accessory-label'>search accessories by keyword</label>
				<input className='accessory-search' type='text' ref={(input) => {this.searchValue = input;}}/>
			</div>
      <AccessoriesBlock />
			<div className='flex-center'>
				<button className='basic-button blue3-border'>Select These Accessories</button>
			</div>
		</div>
	)
}

export default Accessories

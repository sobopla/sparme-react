import React from 'react'
import Logo from './logo'
import DealershipPortalButton from './buttons/DealershipPortalButton'
import Nav from './nav'

const Header = () => {
	return (
		<header className='flex-between header'>
			<Logo />
			<Nav />
			{/* <DealershipPortalButton /> */}
		</header>
	)
}

export default Header

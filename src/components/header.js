import React from 'react'
import Logo from './logo'
import DealershipPortalButton from './buttons/DealershipPortalButton'
import Nav from './nav'
import NavBurger from './navBurger'

const Header = () => {
	return (
		<header className='flex-between header'>
			<Logo />
			<Nav />
			<NavBurger/>
			{/* <DealershipPortalButton /> */}
		</header>
	)
}

export default Header

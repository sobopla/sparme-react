import React from 'react'
import Logo from './logo'

import Nav from './nav'
import NavBurger from './navBurger'

const Header =(props) => {
	return (
		<header className='flex-between header'>
			<Logo />
			<div className='greeting'>
				{props.greeting}
			</div>
			<Nav logout={props.logout}/>
			<NavBurger logout={props.logout}/>
			
		</header>
	)
}

export default Header

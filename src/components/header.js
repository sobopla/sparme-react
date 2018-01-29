import React, { Component } from 'react'
import Logo from './logo'
import DealershipPortalButton from './buttons/DealershipPortalButton'
import Nav from './nav'
import NavBurger from './navBurger'

class Header extends Component {
	render() {
		return (
			<header className='flex-between header'>
				<Logo />
				<Nav logout={this.props.logout}/>
				<NavBurger logout={this.props.logout}/>
				{/* <DealershipPortalButton /> */}
			</header>
		)
	}
}

export default Header

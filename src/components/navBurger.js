import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

export default class NavBurger extends React.Component {
	constructor(props) {
		super(props)
		this.state = { isClicked: false }
		this.handleClick = this.handleClick.bind(this)
	}
	showSettings (event) {
    event.preventDefault();
  }
	handleClick() {
		this.setState(prevState => ({
			isClicked: !prevState.isClicked
		}))
	}

	render() {
		return (
			<div className='menu-wrapper'>
				<Menu right>
					<ul className='nav-options'>
						<li className="menu-item">
							<NavLink className='nav-link'  activeClassName='nav-active' to="/saved-vehicles" onClick={this.handleClick}>
								My Saved Vehicles
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink className='nav-link' activeClassName='nav-active' to="/dashboard" onClick={this.handleClick}>
								Dashboard
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink className='nav-link' activeClassName='nav-active' to="/search" onClick={this.handleClick}>
								Search
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink className='nav-link'  activeClassName='nav-active' to="/financing" onClick={this.handleClick}>
								Financing
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink className='nav-link'  activeClassName='nav-active' to="/accessories" onClick={this.handleClick}>
								Accessories
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink className='nav-link'  activeClassName='nav-active' to="" onClick={this.handleClick}>
								Logout
							</NavLink>
						</li>
					</ul>
      </Menu>
		</div>
		)
	}
}

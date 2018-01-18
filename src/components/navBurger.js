import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
							<Link className='nav-link'  to="/savedvehicles" onClick={this.handleClick}>
								<div>My Saved Vehicles</div>
							</Link>
						</li>
						<li className="menu-item">
							<Link className='nav-link' to="/dashboard" onClick={this.handleClick}>
								<div>Dashboard</div>
							</Link>
						</li>
						<li className="menu-item">
							<Link className='nav-link' to="/showroom" onClick={this.handleClick}>
								<div>Search</div>
							</Link>
						</li>
						<li className="menu-item">
							<Link className='nav-link'  to="/numbersbreakdown" onClick={this.handleClick}>
								<div>Financing</div>
							</Link>
						</li>
						<li className="menu-item">
							<Link className='nav-link'  to="/accessories" onClick={this.handleClick}>
								<div>Accessories</div>
							</Link>
						</li>
						<li className="menu-item">
							<Link className='nav-link'  to="" onClick={this.handleClick}>
								<div>Logout</div>
							</Link>
						</li>
					</ul>
      </Menu>
		</div>
		)
	}
}

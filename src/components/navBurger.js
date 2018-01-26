import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { connect } from 'react-redux'

class NavBurger extends React.Component {
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
							<Link className='nav-link'  to="/saved-vehicles" onClick={this.handleClick}>
								<div>My Saved Vehicles</div>
							</Link>
						</li>
						<li className="menu-item">
							<Link className='nav-link' to="/dashboard" onClick={this.handleClick}>
								<div>Dashboard</div>
							</Link>
						</li>
						<li className="menu-item">
							<Link className='nav-link' to="/search" onClick={this.handleClick}>
								<div>Search</div>
							</Link>
						</li>
						<li className="menu-item">
							<Link className='nav-link'  to="/financing" onClick={this.handleClick}>
								<div>Financing</div>
							</Link>
						</li>
						<li className="menu-item">
							<Link className='nav-link'  to="/accessories" onClick={this.handleClick}>
								<div>Accessories</div>
							</Link>
						</li>
						<li className="menu-item">
							{ this.props.user ? 
								<Link className='nav-link' to="/" onClick={this.props.logout.bind(this)}>
									<div>Logout</div>
								</Link>
								:
								<Link className='nav-link' to="/" onCick={this.handleClick}>
									<div>Login</div>
								</Link>
							}
						</li>
					</ul>
      </Menu>
		</div>
		)
	}
}

function mapStateToProps (state) {
	return { user: state.user }
}

export default connect(mapStateToProps)(NavBurger)
import React from 'react'
import { NavLink } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { connect } from 'react-redux'
import requireAuth from '../hoc/requireAuth'

class NavBurger extends React.Component {
	constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

	handleStateChange = (state) => {
    this.setState({menuOpen: state.isOpen})
  }

	closeMenu = () => {
    this.setState({menuOpen: false})
  }

	toggleMenu = () => {
    this.setState({menuOpen: !this.state.menuOpen})
  }

	render() {

		return (
			<div className='menu-wrapper'>
				<Menu right
					isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}>
					<ul className='nav-options'>
						<li className="menu-item">
							<NavLink
								className='nav-link'
								activeClassName='nav-active'
								onClick={() => this.closeMenu()}
								to="https://how2car.wordpress.com/blog/"
								target='blank' >
								Blog
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink
								className='nav-link'
								activeClassName='nav-active'
								onClick={() => this.closeMenu()}
								to="/dashboard" >
								Dashboard
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink
								className='nav-link'
								activeClassName='nav-active'
								onClick={() => this.closeMenu()}
								to="/search" >
								Search
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink
								className='nav-link'
								activeClassName='nav-active'
								onClick={() => this.closeMenu()}
								to="/financing" >
								Financing
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink
								className='nav-link'
								activeClassName='nav-active'
								onClick={() => this.closeMenu()}
								to="/accessories" >
								Accessories
							</NavLink>
						</li>
						<li className="menu-item">

							{ this.props.user ?
								<NavLink className='nav-link' to="/" onClick={this.props.logout.bind(this)}>
									<div>Logout</div>
								</NavLink>
								:
								<NavLink className='nav-link' to="/" onClick={() => this.closeMenu()}>
									<div>Login</div>
								</NavLink>
							}

						</li>
					</ul>
      </Menu>
		</div>
		)
	}
}


const mapStateToProps = (state) => {
	return { user: state.user }
}

export default connect(mapStateToProps)(requireAuth(NavBurger))

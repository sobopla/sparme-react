import React from 'react'
import { NavLink } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { connect } from 'react-redux'
import requireAuth from '../hoc/requireAuth'

class NavBurger extends React.Component {

	render() {

		return (
			<div className='menu-wrapper'>
				<Menu right>
					<ul className='nav-options'>
						<li className="menu-item">
							<NavLink className='nav-link'  activeClassName='nav-active' to="https://how2car.wordpress.com/blog/" target='blank' >
								Blog
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink className='nav-link' activeClassName='nav-active' to="/dashboard" >
								Dashboard
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink className='nav-link' activeClassName='nav-active' to="/search" >
								Search
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink className='nav-link'  activeClassName='nav-active' to="/financing" >
								Financing
							</NavLink>
						</li>
						<li className="menu-item">
							<NavLink className='nav-link'  activeClassName='nav-active' to="/accessories" >
								Accessories
							</NavLink>
						</li>
						<li className="menu-item">

							{ this.props.user ?
								<NavLink className='nav-link' to="/" onClick={this.props.logout.bind(this)}>
									<div>Logout</div>
								</NavLink>
								:
								<NavLink className='nav-link' to="/" >
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

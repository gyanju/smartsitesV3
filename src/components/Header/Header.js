import React, { Component } from 'react';
import axios from 'axios';
import logo from '../../images/ss-logo.svg'; // Tell Webpack this JS file uses this image

export class Header extends Component {
	state = {
		menus: [],
		isLoaded: false
	}

	componentDidMount() {
		axios.get('https://www.smartsites.com/wp-json/wp/v2/menu')
			.then(res => this.setState({
				menus: res.data,
				isLoaded: true
			}))
			.catch(err => console.log(err));
	}
	
	render() {
		console.log(this.state);
		const { menus, isLoaded } = this.state;
		if( isLoaded ) {
			return (
				<header id="header" className="site-header">
					<nav className="navbar navbar-expand-xl navbar-light">
						<a className="navbar-brand" href="/"><img src={logo} alt="SmartSites"/></a>
						<span className="tagline h5">Think Web. Think Smart.</span>

						<div className="collapse navbar-collapse collapse-block" id="navbarToggler">
							<ul className="navbar-nav ml-auto">
								{menus.map(menu => (
									<li className="nav-item" key={menu.ID}>
										<a className="nav-link" href={menu.url}>{menu.title}</a>
									</li>
								))}
							</ul>
						</div>
						<a href="tel:+12014489010" className="click-call gradient-text h5">201-448-9010</a>
						<button type="button" className="btn toggle-menu-btn" data-toggle="modal" data-target="#custom-toggle-menu">
							<span className="bar-icon"></span>
						</button>
					</nav>
				</header>
			);
		}

		return null
    }
}

export default Header

import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers'
import { Link, IndexLink } from 'react-router';

export default class Nav extends Component {
	render() {
		return (
			<nav className="site-nav">
				<IndexLink to={prefixLink('/')} className="nav-brand">meadow<span>lab</span></IndexLink>
				<ul className="nav-link-list">
					<li className="nav-link"><IndexLink activeClassName='active' to={prefixLink('/')}>Home</IndexLink></li>
					<li className="nav-link"><Link activeClassName='active' to={prefixLink('/projects/')}>Projects</Link></li>
					<li className="nav-link"><Link activeClassName='active' to={prefixLink('/articles/')}>Articles</Link></li>
					<li className="nav-link"><Link activeClassName='active' to={prefixLink('/resume/')}>Resume</Link></li>
				</ul>
			</nav>
		)
	}
}
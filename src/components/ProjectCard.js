import React, { Component, PropTypes } from 'react';
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

export default class ProjectCard extends Component {
	render() {
		const { title, description, projectLink, pageLink, gitLink, icon } = this.props;
		return (
			<div className="project-card">
				<div className="project-card-section-img">
					<a href={projectLink || pageLink || '#'} target="_blank">
						{icon}
					</a>
				</div>
				<div className="project-card-section-main">
					<a className="project-title" href={projectLink || pageLink || '#'} target="_blank">{title}</a>
					<p className="project-description" dangerouslySetInnerHTML={{ __html: (description || '') }}></p>
					<div className="project-card-footer">
						{[
							(pageLink ? <Link key="article" className="project-card-footer-link" to={prefixLink(pageLink)}>Article</Link> : null),
							(gitLink ? <a key="git" className="project-card-footer-link" href={gitLink} target="_blank">Github</a> : null)
							
						]}
					</div>
				</div>
			</div>
		)
	}
}

ProjectCard.propTypes = {
	title:PropTypes.string.isRequired,
	description:PropTypes.string,
	projectLink:PropTypes.string,
	pageLink:PropTypes.string,
	gitLink:PropTypes.string,
	icon:PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	])
}
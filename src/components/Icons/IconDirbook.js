import React from 'react'
export default function IconDirbook (props) {
	if(props.color){
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181 264"><title>Dirbook</title><g fill="none" fillRule="evenodd"><path fill="#64D6C2" d="M71 23V7c0-4-3-7-7-7H33c-4 0-7 3-7 7v16h45z"/><rect width="181" height="241" y="23" fill="#64D6C2" fillOpacity=".5"/><rect width="15" height="241" y="23" fill="#64D6C2" fillOpacity=".7"/><g transform="rotate(-33 139.275 -15.85)"><path fill="#64D6C2" fillOpacity=".7" d="M17 67v116H2V67h15z"/><rect width="19" height="67" fill="#64D6C2" fillOpacity=".9"/><rect width="5" height="51" x="19" y="4" fill="#FFF" fillOpacity=".9"/></g></g></svg>
		)
	}
	else {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181 264">
				<title>Dirbook</title>
				<g fill="none" fillRule="evenodd">
					<path className="project-icon-svg" fill="#64D6C2" d="M71 23V7c0-4-3-7-7-7H33c-4 0-7 3-7 7v16h45z"/>
					<rect className="project-icon-svg" width="181" height="241" y="23" fill="#64D6C2" fillOpacity=".5" rx="9"/>
					<rect className="project-icon-svg" width="15" height="241" y="23" fill="#64D6C2" fillOpacity=".7"/>
					<g transform="rotate(-33 139.275 -15.85)">
						<path className="project-icon-svg" fill="#64D6C2" fillOpacity=".7" d="M17 67v116H2V67h15z"/>
						<rect className="project-icon-svg" width="19" height="67" fill="#64D6C2" fillOpacity=".9"/>
						<rect width="5" height="51" x="19" y="4" fill="#FFF" fillOpacity=".9"/>
					</g>
				</g>
			</svg>
		)
	}
}
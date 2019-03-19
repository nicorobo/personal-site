import React from 'react'
export default function IconMendeleev (props) {
	if(props.color){
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 293"><title>mendeleev-icon</title><g fill="#64D6C2" fillRule="evenodd"><path fillOpacity=".3" d="M89 17v76L3.3 264.4c-8 15.8 0 28.6 17.7 28.6h208c17.7 0 25.6-12.8 17.7-28.6L162 95V17c4 0 7-3 7-7V7c0-4-3-7-7-7H88c-4 0-7 3-7 7v3c0 4 3 7 7 7h1z"/><path fillOpacity=".5" d="M181 157.8l44.5 96.2c7.5 16-.8 29-18.5 29H42c-17.7 0-26-13-18.5-29l55.2-119.2 102.3 23z"/><path fillOpacity=".9" d="M196 190.6l29.5 63.4c7.5 16-.8 29-18.5 29H42c-17.7 0-26-13-18.5-29L48 200l148-9.4z"/></g></svg>
		)
	}
	else {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 293">
				<title>mendeleev-icon</title>
				<g  className="project-icon-svg" fill="#64D6C2" fillRule="evenodd">
					<path fillOpacity=".3" d="M89 17v76L3.3 264.4c-8 15.8 0 28.6 17.7 28.6h208c17.7 0 25.6-12.8 17.7-28.6L162 95V17c4 0 7-3 7-7V7c0-4-3-7-7-7H88c-4 0-7 3-7 7v3c0 4 3 7 7 7h1z"/>
					<path fillOpacity=".5" d="M181 157.8l44.5 96.2c7.5 16-.8 29-18.5 29H42c-17.7 0-26-13-18.5-29l55.2-119.2 102.3 23z"/>
					<path fillOpacity=".9" d="M196 190.6l29.5 63.4c7.5 16-.8 29-18.5 29H42c-17.7 0-26-13-18.5-29L48 200l148-9.4z"/>
				</g>
			</svg>
		)
	}
}
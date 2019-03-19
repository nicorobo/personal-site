import React from 'react'
export default function IconThoughts (props) {
	if(props.color){
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298 257">
				<title>thoughtjar-icon-color</title>
				<g fill="none" fillRule="evenodd">
					<rect width="298" height="106" fill="#F7DB64" fillOpacity=".2" rx="9"/>
					<rect width="298" height="141" y="116" fill="#64D6C2" fillOpacity=".1" rx="9"/>
					<rect width="10" height="106" fill="#F7DB64"/>
					<rect width="10" height="141" y="116" fill="#64D6C2"/>
					<rect width="63" height="11" x="219" y="85" fill="#F7DB64" fillOpacity=".6" rx="8"/>
					<rect width="63" height="11" x="219" y="237" fill="#64D6C2" fillOpacity=".6" rx="8"/>
					<rect width="125" height="20" x="24" y="129" fill="#64D6C2" fillOpacity=".6" rx="8"/>
					<rect width="125" height="20" x="24" y="12" fill="#F7DB64" fillOpacity=".5" rx="8"/>
					<g fillOpacity=".6" transform="translate(229 12)">
						<circle cx="42" cy="11" r="11" fill="#F7DB64"/>
						<circle cx="11" cy="11" r="11" fill="#F7DB64"/>
						<circle cx="42" cy="128" r="11" fill="#63D5C1"/>
						<circle cx="11" cy="128" r="11" fill="#64D6C2"/>
					</g>
				</g>
			</svg>
		)
	}
	else {
		return (
			<svg viewBox="0 0 298 257" xmlns="http://www.w3.org/2000/svg">
				<title>thoughtjar-icon</title>
				<g className="project-icon-svg" fill="#F7DB64" fillRule="evenodd">
					<rect fillOpacity=".21" width="298" height="106" rx="9"/>
					<rect fillOpacity=".21" y="116" width="298" height="141" rx="9"/>
					<rect fillOpacity=".80" width="10" height="106"/>
					<rect fillOpacity=".80" y="116" width="10" height="141"/>
					<rect fillOpacity=".55" x="219" y="85" width="63" height="11" rx="8"/>
					<rect fillOpacity=".55" x="219" y="237" width="63" height="11" rx="8"/>
					<rect fillOpacity=".55" x="24" y="129" width="125" height="20" rx="8"/>
					<rect fillOpacity=".55" x="24" y="12" width="125" height="20" rx="8"/>
					<g transform="translate(229 12)" fillOpacity=".55">
						<circle cx="42" cy="11" r="11"/>
						<circle cx="11" cy="11" r="11"/>
						<circle cx="42" cy="128" r="11"/>
						<circle cx="11" cy="128" r="11"/>
					</g>
				</g>
			</svg>
		)
	}
}
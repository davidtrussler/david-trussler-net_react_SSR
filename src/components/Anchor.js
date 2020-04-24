import React from 'react';

export function Anchor(props) {
	return (
			<a 
				href={props.href}
				target={props.target}
			>{props.link}</a>
	)
}

Anchor.defaultProps = {
	target: '_self'
}

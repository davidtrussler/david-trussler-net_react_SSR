import React from 'react';

export function Span(props) {
	return (
			<span 
				className={props.class}
			>{props.text}</span>
	)
}

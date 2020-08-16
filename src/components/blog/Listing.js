import React from 'react';

export function Listing(props) {
	let timestamp = new Date(props.timestamp); 
	
	return (
		<li key={props.title}>
			<p>{Intl.DateTimeFormat('en-GB', props.options).format(timestamp)}</p>
			<p dangerouslySetInnerHTML={{__html: props.title}} />
		</li>
	)
}

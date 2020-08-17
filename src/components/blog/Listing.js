import React from 'react';

export function Listing(props) {
	const options = {day: 'numeric', month: 'long', year: 'numeric'}; 
	const timestamp = new Date(props.timestamp); 
	const href = '?postid=' + `${props.postid}`; 

	return (
		<li key={props.title}>
			<p>{Intl.DateTimeFormat('en-GB', options).format(timestamp)}</p>

			<p>
				<a href={href} dangerouslySetInnerHTML={{__html: props.title}} />
			</p>
		</li>
	)
}

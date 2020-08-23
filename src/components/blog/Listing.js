import React from 'react';
import { Anchor } from '../shared/Anchor'; 
import { Span } from '../shared/Span'; 

export function Listing(props) {
	const options = {day: 'numeric', month: 'long', year: 'numeric'}; 
	const timestamp = new Date(props.timestamp); 
	const href = '?postid=' + `${props.postid}`; 
	const renderTitle = (titleObj) => {
		if (typeof titleObj.text == 'string') {
			return titleObj.text
		} else {
			return (
				<React.Fragment>
					{titleObj.text.map(text => {
						if (text.fragment) {
							return text.fragment
						} else if (text.span) {
							return <Span
								class={text.span.class}
								text={text.span.text}
							/>
						}
					})}
				</React.Fragment>
			)
		}
	}

	return (
		<li key='index_{props.index}'>
			<p>{Intl.DateTimeFormat('en-GB', options).format(timestamp)}</p>

			<Anchor
				href={href}
				link={ renderTitle(JSON.parse(props.title)) }
			/>
		</li>
	)
}

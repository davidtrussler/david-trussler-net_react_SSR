import React from 'react';
import { Anchor } from '../shared/Anchor'; 
import { Span } from '../shared/Span'; 

export function SinglePost(props) {
	const timestamp = new Date(props.post.timestamp); 
	const options = {day: 'numeric', month: 'long', year: 'numeric'}; 
	const renderBody = (bodyObj) => {
		return (
			<React.Fragment>
				{bodyObj.paras.map((para, i) => {
					if (typeof para.text == 'string') {
						return <p key='para_{i}'>{para.text}</p>;
					} else {
						return (
							<p key='para_{i}'>
							{para.text.map((text, i) => {
								if (text.fragment) {
									return text.fragment 
								} else if (text.anchor) {
									return <Anchor
										key={i}
										href={text.anchor.href}
										target={text.anchor.target}
										link={text.anchor.link}
										class={text.anchor.class}
									/>; 
								} else if (text.span) {
									return <Span
										class={text.span.class}
										text={text.span.text}
									/>
								}
							})}
							</p>
						)
					}
				})} 
			</React.Fragment>
		)
	}

	return (
		<React.Fragment>
			<p>
				<a href="/blog">Back to all posts</a>
			</p>

			<h2 dangerouslySetInnerHTML={{__html: props.post.title}} />

			<p>{Intl.DateTimeFormat('en-GB', options).format(timestamp)}</p>

			{ renderBody(JSON.parse(props.post.body)) }
		</React.Fragment>
	)	
}

import React from 'react';

export function SinglePost(props) {
	const timestamp = new Date(props.post.timestamp); 
	const options = {day: 'numeric', month: 'long', year: 'numeric'}; 

	return (
		<React.Fragment>
			<p>
				<a href="/blog">Back to all posts</a>
			</p>

			<h2 dangerouslySetInnerHTML={{__html: props.post.title}} />

			<p>{Intl.DateTimeFormat('en-GB', options).format(timestamp)}</p>

			<p>{props.post.body}</p>
		</React.Fragment>
	)	
}

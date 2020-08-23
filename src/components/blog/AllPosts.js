import React from 'react';
import { Listing } from './Listing'; 

function renderPosts(posts) {
	return (
		<ul>
		{
			posts.map((post, i) => 
				<Listing 
					timestamp={post.timestamp} 
					title={post.title}
					postid={post.postid}
					index={i}
				/>
			)
		}
		</ul>
	)
}

export function AllPosts(props) {
	return (
		<React.Fragment>
			<h2>Blog</h2>

			<p>I blog on web development, politics, music and football, sometimes all at once. Enjoy.</p>

			{renderPosts(props.posts)}
		</React.Fragment>
	)
}

import React from 'react';
import { Listing } from './Listing'; 

function renderPosts(posts) {
	if (posts === undefined) {
		return (
			<p>There are no posts in this blog</p>
		)
	} else {
		return (
			<ul>
			{
				posts.map((post, i) => 
					<Listing 
						timestamp={post.timestamp} 
						title={post.title}
						postid={post.postid}
						key='post_{i}'
					/>
				)
			}
			</ul>
		)
	}
}

export function Main(posts) {
	return (
		<main>
			<div className="constrained">
				<div className="main__inner">
					<h2>Blog</h2>

					<p>I blog on web development, politics, music and football, sometimes all at once. Enjoy.</p>

					{renderPosts(posts.posts)}
				</div>
			</div>
		</main>
	)
}

import React from 'react';
import { Listing } from './Listing'; 

function renderPosts(posts) {
	if (posts === undefined) {
		return (
			<p>There are no posts in this blog</p>
		)
	} else {
		let options = {day: 'numeric', month: 'long', year: 'numeric'}; 

		return (
			<ul>
			{
				posts.map((post, i) => 
					<Listing 
						options={options}
						timestamp={post.timestamp} 
						title={post.title}
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
					<p>Content for the main section of the blog landing page goes here.</p>
					{renderPosts(posts.posts)}
				</div>
			</div>
		</main>
	)
}

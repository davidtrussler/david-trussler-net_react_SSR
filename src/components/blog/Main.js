import React from 'react';

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
					<li key={i}>{post.date}: {post.title}</li>
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

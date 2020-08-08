import React from 'react';

export function Main(posts) {
	console.log('Main called'); 

	return (
		<main>
			<div className="constrained">
				<div className="main__inner">
					<p>Content for the main section of the blog landing page goes here.</p>

					<ul>
						{
							posts.posts.map((post, i) => 
								<li key={i}>{post.date}: {post.title}</li>
							)
						}
					</ul>
				</div>
			</div>
		</main>
	)
}

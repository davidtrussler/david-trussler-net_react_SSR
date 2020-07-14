import React from 'react';

let rows = []; 

const db = require('../../db'); 

db.getPosts().then(response => rows = response); 

export function Main() {
	return (
		<main>
			<div className="constrained">
				<div className="main__inner">
					<p>Content for the main section of the blog landing page goes here.</p>

					<ul>
						{rows.map(
							(post, i) => <li key={i}>{post.date}: {post.title}</li>
						)}
					</ul>
				</div>
			</div>
		</main>
	)
}

import React from 'react';

const db = require('../../db'); 

let rows = db.getPosts(); 

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

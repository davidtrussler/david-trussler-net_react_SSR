import React from 'react';

let rows = []; 

export function Main(props) {
	console.log('props: ', props); 

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

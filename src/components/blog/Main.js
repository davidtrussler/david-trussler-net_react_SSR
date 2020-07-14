import React from 'react';

const db = require('../../db'); 

let rows = []; 

export function Main() {
	var results = new Promise(function(resolve, reject) {
		// setTimeout(function() {
			// resolve(myfunction); 
		// }, 2000); 
		resolve(db.getPosts()); 
	}); 

	results.then(function(msg) {
		console.log(msg); 
	})

	// db.getPosts().then(rows => {
	// 	console.log('rows: ', rows)
	// }).catch(error => {
	// 	console.log('error: ', error)
	// }); 

	// let result = db.getPosts();

	// console.log('result: ', db.getPosts()); 

	// db.getPosts(rows => {
	// 	// console.log('rows: ', rows); 
	// }); 

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

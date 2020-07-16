import React, { Component } from 'react';

const db = require('../../db'); 

export class Main extends Component {
	constructor() {
		super(); 

		this.state = {
			rows = []
		}
	}

	render() {
		let _this = this;

		db.getPosts().then(function(response) {
			response.forEach(function(row) {
				console.log('row: ', row); 

				_this.setState({
					rows = response
				}); 
			}); 
		})

		return (
			<main>
				<div className="constrained">
					<div className="main__inner">
						<p>Content for the main section of the blog landing page goes here.</p>

						<ul>
							{this.state.rows.map(
								(post, i) => <li key={i}>{post.date}: {post.title}</li>
							)}
						</ul>
					</div>
				</div>
			</main>
		)
	}
}

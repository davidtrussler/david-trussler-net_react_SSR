import React from 'react';

const db = require('../../db'); 

let rows = db.getCities(); 

export function Main() {
	return (
		<main>
			<div className="constrained">
				<div className="main__inner">
					<p>Content for the main section of the reviews page goes here.</p>

					<ul>
						{rows.map(
							(row, i) => <li key={i}>The location of {row.name} is {row.location}</li>
						)}
					</ul>
				</div>
			</div>
		</main>
	)
}

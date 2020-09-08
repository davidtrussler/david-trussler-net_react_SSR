import React from 'react';
import { AllPosts } from './AllPosts'; 
import { SinglePost } from './SinglePost'; 

function renderMainContent(props) {
	if (props.context == 'singlePost') {
		return <SinglePost post={props.post}/>
	} else {
		return <AllPosts posts={props.posts}/>		
	}
}

export function Main(props) {
	return (
		<main>
			<div className="constrained">
				<div className="main__inner">
					{ renderMainContent(props) }
				</div>
			</div>
		</main>
	)
}

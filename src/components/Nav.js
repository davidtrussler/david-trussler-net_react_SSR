import React from 'react';
import {Anchor} from '../components/Anchor'; 

export function Nav() {
	return (
		<nav className="main-nav">
			<ul>
				<li className="main-nav__element">
					<Anchor href="/" link="Home"/>
				</li>

				<li className="main-nav__element">
					<Anchor href="music" link="Music"/>
				</li>
			</ul>
		</nav>
	)
}

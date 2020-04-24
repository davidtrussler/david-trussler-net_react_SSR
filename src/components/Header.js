import React from 'react';
import {Nav} from '../components/Nav'; 

export function Header() {
	return(
		<header>
			<div className="constrained">
				<div className="header__inner">
					<h1 className="header__title">David Trussler</h1>
					<Nav/>
				</div>
			</div>
		</header>
	)
}

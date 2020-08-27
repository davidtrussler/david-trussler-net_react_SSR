import React from 'react';

export function UnorderedList(props) {
	return (
		<ul className={props.class}>
			{props.items.map((item, i) => {
				return <li key="item_{i}">{item.item}</li>
			})}
		</ul>
	)
}
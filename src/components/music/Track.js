import React from 'react';

export function Track(props) {
	let filename = props.title.replace(/ /g, ''); 

	return (
		<section className="music__track">
			<h3 className="track__title">{props.title}</h3>

			<ul className="track__instruments">
			{
				props.instruments.map((instrument, i) =>
					<li className="track__instrument" key={`instruments_${props.title}_${i}`}>{instrument}</li>
				)
			}
			</ul>

			<img className="track__img" src={`images/music/tracks/${filename}.gif`}/>

			<p>{props.text}</p>

			<audio controls>
				<source src={`audio/${filename}.mp3`} type="audio/mpeg"/>
			</audio> 
		</section>
	)
}

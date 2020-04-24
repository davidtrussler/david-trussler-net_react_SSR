import React from 'react';

export function Image(props) {
	return (
    <div className="img_main">
      <img src={"images/" + props.fileName} alt={props.alt}/>
    </div>
	)
}

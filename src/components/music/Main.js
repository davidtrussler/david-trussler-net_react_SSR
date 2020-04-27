import React from 'react';
import {Heading} from './Heading'; 
import {Intro} from './Intro'; 
import {Tracks} from './Tracks'; 

export function Main() {
	return (
	  <main>
	    <div className="constrained">
	      <div className="main__inner">
	      	<Heading/>
	      	<Intro/>
	      	<Tracks/>
	      </div>
	    </div>
	  </main>
  )
}

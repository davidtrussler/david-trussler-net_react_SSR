import React from 'react';

const App = () => {
	function handleEvent(e) {
		e.preventDefault(); 
		console.log('I was clicked!'); 
	}

  return (
	  <div>
	    <h1>Hello World, React!</h1>
	    <h2>You are great!</h2>
	    <a href="/?event=click" onClick={handleEvent}>Click me!</a>
	  </div>
  )
}

export default App

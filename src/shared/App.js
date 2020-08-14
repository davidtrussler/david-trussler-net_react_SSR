import React from 'react';
import {Route, Switch} from 'react-router-dom'; 
import Home from '../components/home/Home'; 
import Music from '../components/music/Music'; 
import Blog from '../components/blog/Blog'; 

const App = () => {
  return (
		<div>
			<Switch>
				<Route path="/blog" component={Blog} />
				<Route path="/music" component={Music} />
				<Route path="/" component={Home} />
			</Switch>
		</div>
	)
}

export default App

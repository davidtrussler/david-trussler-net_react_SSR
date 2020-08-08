import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server';
import App from '../shared/App.js'
import scss from '../shared/App.scss'; 
import { StaticRouter } from 'react-router'; 
import { createStore } from 'redux'; 
import dbReducer from '../store/dbReducer'; 
import { fetchData } from '../db'; 

const app = express(); 
const port = process.env.PORT || 4000; 

// Seve static files
app.use(express.static('public')); 

// Fired every time the server receives a request
app.use(handleRender); 

function handleRender(req, res) {
	console.log('handleRender!'); 

  // const data = (dbReducer) => {
		// return new Promise(function(resolve, reject) {
		// 	createStore(dbReducer);
		// })
  // }

  // data().then(response => {
  // 	console.log('response: ', response); 
  // })

  // createStore; // .then(data => {
	  	// console.log('state: ', state); 
	  // })

  // console.log('data: ', data); 
		
	// getPosts().then(response => {
		// Add response to dataStore
		// console.log('response: ', response); 
		// Render component to string

	fetchData((data) => {
		const dataStore = createStore(dbReducer); 

		// Add response data to store
		dataStore.dispatch({
			type: 'POSTS_UPDATED', 
			payload: data
		}); 

	  const markup = ReactDOMServer.renderToString(
	  	<StaticRouter location={req.url}>
		  	<App />
	  	</StaticRouter>
		)

		res.send(renderFullPage(markup)); 
	})
}; 

function renderFullPage(markup) {
	console.log('renderFullPage!')

	return `
		<!doctype html>
		<html>
			<head>
				<title>David Trussler</title>
				<meta charset="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<style>${scss}</style>
			</head>
			<body>
			  <div id="app">${markup}</div>
			</body>
		</html>
	`
}; 

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})

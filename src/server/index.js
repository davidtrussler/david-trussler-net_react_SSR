import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server';
import App from '../shared/App.js'
import scss from '../shared/App.scss'; 
import { StaticRouter } from 'react-router'; 

const app = express(); 
const port = process.env.PORT || 4000; 

// Seve static files
app.use(express.static('public')); 

// Fired every time the server receives a request
app.use(handleRender); 

function handleRender(req, res) {
	console.log('handleRender!'); 

	// Render component to string
  const markup = ReactDOMServer.renderToString(
  	<StaticRouter location={req.url}>
	  	<App/>
  	</StaticRouter>
	)

	res.send(renderFullPage(markup)); 
}; 

function renderFullPage(markup) {
	console.log('renderFullPage')

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

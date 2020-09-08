import React from 'react'
import ReactDOMServer from 'react-dom/server';
import express from 'express'
import { StaticRouter } from 'react-router'; 
import { fetchAllPosts } from '../db'; 
import { fetchSinglePost } from '../db'; 
import dataStore from '../store'; 
import dbReducer from '../store/dbReducer'; 
import App from '../shared/App.js'
import scss from '../shared/App.scss'; 

const app = express(); 
const port = process.env.PORT || 4000; 

// Seve static files
app.use(express.static('public')); 

// Fired every time the server receives a request
app.use(handleRender); 

function generateMarkup(req) {
	return (
		ReactDOMServer.renderToString(
	  	<StaticRouter location={req.url}>
		  	<App />
	  	</StaticRouter>
		)
	)
}

function handleRender(req, res) {
  if (req.url.indexOf('/blog') > -1) {
		// Blog page is requested
		if (req.url.indexOf('?titleid') == -1) {
			// Main page requested: display listings
			dataStore.dispatch({
				type: 'BLOG_CALLED_MAIN',
			}); 

			fetchAllPosts(data => {
				// Add response data to store
				dataStore.dispatch({
					type: 'POSTS_UPDATED', 
					payload: data
				}); 

				const markup = generateMarkup(req); 

				res.send(renderFullPage(markup)); 
			})
  	} else {
  		const titleid = req.url.split('?titleid=')[1]; 
  		const postidArr = titleid.split('-'); 
  		const postid = postidArr[postidArr.length - 1]; 

			dataStore.dispatch({
				type: 'BLOG_CALLED_POST', 
				payload: {
					'context': 'singlePost', 
					'postid': postid
				}
			}); 

			fetchSinglePost((postid), data => {
				// Add response data to store
				dataStore.dispatch({
					type: 'POST_UPDATED', 
					postid: postid, 
					payload: data
				}); 
				
			  const markup = generateMarkup(req); 

				res.send(renderFullPage(markup)); 
			})
  	}
  } else {
	  const markup = generateMarkup(req); 

		res.send(renderFullPage(markup)); 
  }
}; 

function renderFullPage(markup) {
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

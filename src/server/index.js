import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server';
import App from '../shared/App.js'

const app = express()
const port = 4000

app.use(express.static('public'))

app.get('/', (req, res) => {
  const markup = ReactDOMServer.renderToString(<App/>)

	res.send(`
		<!doctype html>
		<html>
			<head>
				<meta charset="utf-8"/>
				<title>React Example</title>
				<script src="/bundle.js" defer></script>
			</head>
			<body>
			  <div id="app">
			  	${markup}
			  </div>
			</body>
		</html>
	`)
})

app.listen(port, () => {
  console.log(`Server is listening on port: 4000`)
})

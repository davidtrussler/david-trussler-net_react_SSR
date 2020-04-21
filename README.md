# david-trussler-net_react_SSR

Makes a build of my personal site in React, built from the ground up

## Set up

- run `npm install` so install all dependencies
- run `npm run start` to configure and start a development server
- run `npm run build` to create a production bundle

## Branches

### [React-project-from-scratch_Tim-Givois](https://github.com/davidtrussler/david-trussler-net_react_SSR/tree/React-project-from-scratch_Tim-Givois)

This is based on [Create a React project from scratch (without create-react-app)](https://medium.com/@tim.givois.mendez/create-a-react-project-from-scratch-without-create-react-app-f02fce4e05b) by Tim Givois

It sets up a very basic skeleton app

It follows these steps: 

- Creating the project and adding dependencies
  - creates package.json
  - installs react and react-dom
  - installs babel
  - adds babel configuration file
  - installs webpack
- Configuring webpack
  - adds webpack configuration file
  - adds index.html file
  - adds App.js
  - adds index.js
  - updates package.json

### [Server-rendering_Tyler-McGinnis](https://github.com/davidtrussler/david-trussler-net_react_SSR/tree/Server-rendering_Tyler-McGinnis)

This is based on [Server Rendering with React and React Router](https://tylermcginnis.com/react-router-server-rendering/) by Tyler McGinnis

It sets up server and client side rendering of the skeleton app

Right now it is not fully functional

It follows these steps: 

- Creates a React component
  - updates webpack.config.js
  - updates package.json
  - creates the shared directory containing App.js
- Creates a server
  - creates the server directory containing index.js
- Creates a react app to serve client side
  - creates the browser directory containing index.js

### [SSR_Rohit-Kumar](https://github.com/davidtrussler/david-trussler-net_react_SSR/tree/SSR_Rohit-Kumar)

This is based on [How to implement server-side rendering in your React app in three simple steps](https://www.freecodecamp.org/news/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e/) by Rohit Kumar

It sets up server and client side rendering of a new skeleton app

It follows these (actually four rather than the titular three) steps: 
- Create a fresh Redux Store on every request
- Optionally dispatch some actions
- Get the state out of the Store and perform SSR
- Send the state obtained in the previous step along with the response

My steps: 
- Create package.json with all dependencies for the project
- Configure Babel and Webpack
  - Adds .babelrc
  - Adds webpack.config.js
- Adds App.js
- Adds Redux files
- Adds server side files
  - adds template.js
  - adds server.js
- Adds client side files
  - adds bundle.js
  - adds client.js
- Adds start files
  - adds index.js
  - adds app.js

### [Server-side-rendering_Frikky](https://github.com/davidtrussler/david-trussler-net_react_SSR/tree/Server-side-rendering_Frikky)

This is based on [Server side rendering (SSR) with pure React](https://medium.com/swlh/moving-your-website-to-server-side-rendering-ssr-in-reactjs-36278d4a87f5) by Frikky

It sets up server and client side rendering of the skeleton app

It follows these steps: 
- installs dependencies
- updates babel config
- creates functions folder and transpiles App.js into it
- copies package.json into functions
- creates the client/server directory structure
- create basic server code with express

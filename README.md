# react-dataviz-example

Simple React application that fetches data from a BlockChain public API via a tiny Express server.

The data is transformed using Ramda and displayed using D3. You can swap between graphs, add your own and interact with the time series.

Reflux has been used to provide a Flux implementation. State is stored using an Immutable object.

The client side build is provided by Webpack with React-hot-loader for real time updates to the browser.

Get started:
	'npm install' <-- install dependencies
	'npm start' <-- start express and webpack servers
	go to localhost:3000

Tech Stack:
	[React](http://facebook.github.io/react/)
	[Reflux](https://github.com/spoike/refluxjs)
	[D3](http://d3js.org/)
	[Express](http://expressjs.com/)
	[Webpack](http://webpack.github.io/)
	[React-hot-loader](https://github.com/gaearon/react-hot-loader)
	[Superagent](http://visionmedia.github.io/superagent/)
	[Bluebird](https://github.com/petkaantonov/bluebird)
	[Immutable](https://github.com/facebook/immutable-js)
	[Ramda](http://ramdajs.com/)
	[Stylus](http://learnboost.github.io/stylus/)

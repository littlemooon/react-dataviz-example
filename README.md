# react-dataviz-example

Simple React application that fetches data from a BlockChain public API via a tiny Express server.

The data is transformed using Ramda and displayed using D3. You can swap between graphs, add your own and interact with the time series.

Reflux has been used to provide a Flux implementation. State is stored using an Immutable object.

The client side build is provided by Webpack with React-hot-loader for real time updates to the browser.

![screenshot-2017-11-27 react - data visualisation example](https://user-images.githubusercontent.com/2467416/33268428-7e0e7168-d37d-11e7-9cb1-ed29e8074eed.png)

Get started:

	'npm install' <-- install dependencies
	'npm start' <-- start express and webpack servers
	go to localhost:3000


Tech Stack:
- [React](http://facebook.github.io/react/)
- [Reflux](https://github.com/spoike/refluxjs)
- [D3](http://d3js.org/)
- [Express](http://expressjs.com/)
- [Webpack](http://webpack.github.io/)
- [React-hot-loader](https://github.com/gaearon/react-hot-loader)
- [Superagent](http://visionmedia.github.io/superagent/)
- [Bluebird](https://github.com/petkaantonov/bluebird)
- [Immutable](https://github.com/facebook/immutable-js)
- [Ramda](http://ramdajs.com/)
- [Stylus](http://learnboost.github.io/stylus/)


## On Reflection

API:

I quickly decided upon using a Blockchain API to display real-time bitcoin statistics. The API is modern, quick and open. I began by using Superagent to consume this API client-side. However, after setting this up and doing some research it materialised that the Blockchain charts API is not CORS enabled. To circumvent this I created a small Express server.

Server:

The Express server itself takes a Blockchain chart ID, requests data, transforms and returns. The transformation is performed using Ramda - a functional, auto-currying Underscore/Lodash equivalent that I have grown rather fond of. This is used to reduce the raw data, finding the average value for each day. I generally prefer to use Koa over Express as ES6 generators provide a superb async, coroutine-esque API. However, I didn't wish for you to have to install a new version of node!

Bundling:

For client-side bundling I have chosen to use Webpack. I have been gradually moving my personal projects from Gulp to Webpack as it is incredibly quick to compile, has a great selection of plugins and works with React particularly well - especially when combined with React-hot-loader. NPM is used to start both the Express and Webpack server.

Flux:

Reflux has been my Flux implementation of choice. It is simple, yet powerful, and has a strong community behind it. Through the creation of several applications using React and Reflux I have developed numerous patterns - many of which are on display in this little application. Of note is the MapStoreMixin which leverages Immutable by Facebook to abstract the management of state. For a single Store this is probably overkill but hopefully you can see how this scales well. I try to keep Actions simple at all times, accessing services via Stores. In larger code sets small Stores frequently listen to more complex, 'compound' Stores. These are functionally more focussed and emit more specific subsets of the compound Store state.

Models:

Another pattern I have developed over time is stateless 'Model' objects - such as ChartTypeModel. These are groups of pure functions that hide the implementation detail of an object from any consumers. For example, if we decide to alter the pseudo ChartType object, SelectorList will not be affected so long as the getId and getName functions are available. The application has been architected around the idea that charts can be added, removed or changed just by updating ChartTypes. You can give it a go yourself by changing an ID to match the route of any chart within Blockchain's API.

D3:

This is actually the first time I have implemented vanilla D3 without a wrapper such as Dimple or NVD3. It was good, I learned a lot. In particular, it has a far nicer API than I was expecting! There is a lot of documentation and examples so it was just a matter of trawling these to produce the desired effect. However, I am sure that with more practice and experience I could identify a better approach.

Pros:

- The server is lightweight
- The development workflow is very quick
- All Components and Stores play simple, transparent roles within the application
- The ChartDataStore provides a solid caching strategy
- Implementation details are kept hidden and coupling is kept to a minimum

Cons:

- There is a server (sorry about that)
- Bundling only supports a development environment
- The D3 chart is very simple and the implementation is not abstract

Improvements:

The D3 chart component is very basic. If continuing to develop this application I would certainly abstract this implementation to make it generic and permit far more options. This exercise has in fact inspired me to create an open source React D3 wrapper as all of the existing implementations are either too heavyweight or completely inflexible.

The Webpack, React-hot-loader and Express combination works correctly when executed from the command line. However, I would spend more time improving the logging and error handling. When using 'npm start' the Webpack logs are currently hidden. To get around this during development I had two terminal tabs open - one running 'npm run client' and the other 'npm run serve'.

Client-side bundling currently only supports a development environment. Production and test would need to be added.

If growing the code set and introducing more components and features I would abstract many of the common patterns into 'base' components. I have created the open source [React-Tree](https://github.com/littlemooon/react-tree) component. This is an example of a highly generic base component I use in a few projects.

With a bit more time I would have included the 6to5-loader and utilised ES6 as much as possible. This allows for more succinct, maintainable and yet readable code. Plus it is something I only wish to become more and more familiar with!

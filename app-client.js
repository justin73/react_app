var React = require("react");
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var APP = require("./components/APP");
var Audience = require('./components/Audience');
var Speaker = require('./components/Speaker');
var Board = require('./components/Board');
var Repos = require('./components/Repos');
var Repo = require('./components/Repo');
var Whoops404 = require("./components/Whoops404");

// var routes = (
	// <Route handler={APP}>
	// 	<DefaultRoute handler={Audience} />
	// 	<Route name="speaker" path="speaker" handler={Speaker}></Route>
	// 	<Route name="board" path="board" handler={Board}></Route>
	// </Route>
// )

ReactDOM.render((
   	<Router history={hashHistory}>
		<Route path="/" component={APP}>
			<IndexRoute component={Audience} />
			<Route path="/repos" component={Repos}/>
			<Route path="/repos/:userName/:repoName" component={Repo}/>
			<Route path="/speaker" component={Speaker} />
			<Route path="/board" component={Board} />
			<Route path="*" component={Whoops404}/>
		</Route>
   	</Router>
), document.getElementById("react-container"));
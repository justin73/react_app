var React = require("react");
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Repos = React.createClass({
	render() {
	    return (
			<div>
				<h2>Repos</h2>
				<ul>
					<li><Link to="/repos/reactjs/react-router">React Router</Link></li>
					<li><Link to="/repos/facebook/react">React</Link></li>
				</ul>
			</div>
	    )
	}
})
module.exports = Repos;
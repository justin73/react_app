var React = require("react");

var Repo = React.createClass({
	render() {
	    return (
			<div>
				<h2>{this.props.params.repoName}</h2>
			</div>
	    )
	}
})

module.exports = Repo;
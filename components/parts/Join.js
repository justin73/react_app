var React = require("react");
var ReactDOM = require('react-dom');
var Join = React.createClass({
	join(){
		//use ref to grab the element
		var memberName = ReactDOM.findDOMNode(this.refs.name).value
		alert("ToDO: Join member: "+memberName)
	},
	render(){
		return(
			<form action="javascript:void(0)" onSubmit={this.join}>
				<label>Full Name</label>
				<input ref="name" className="form-control" placeholder="enter your full name..." required/>
				<button className="btn btn-primary">Join</button>
			</form>
		);
	}
});
module.exports= Join
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Router = ReactRouter.Router;
var io = require("socket.io-client");
var Header = require("./parts/Header");
var APP = React.createClass({
	getInitialState(){
		return{
			status:"disconnected",
			title:"",
			dance:"yea please"
		}
	},
	componentWillMount(){
		this.socket = io("http://localhost:3000");
		this.socket.on("connect", this.connect);
		this.socket.on('disconnected', this.disconnect);
		// when welcome is triggered on the server end, this call the local
		// function welcome to get the data from the server
		this.socket.on('welcome', this.welcome);
	},
	connect(){
		this.setState({
			status:'connected'
		})
	},
	disconnect(){
		this.setState({
			status:"disconnected"
		})
	},
	welcome(serverState){
		this.setState({
			title: serverState.title
		})
	},
	render(){
		that = this
		// here add state values into the this.props.children, so that in the child component
		// the child can use as props
		// this is used to replace {...this.props}
		var children = React.Children.map(this.props.children, function (child) {
		return React.cloneElement(child, {
				title: that.state.title,
				status: that.state.status,
				dance: that.state.dance
			})
		})
		return (
			<div>
				<Header title={this.state.title} status={this.state.status}></Header>
				<ul role="nav">
					<li><Link activeClassName="active" to="/">Audience</Link></li>
		          	<li><Link activeClassName="active" to="/speaker">Speaker</Link></li>
		          	<li><Link activeClassName="active" to="/board" >Board</Link></li>
		          	<li><Link activeClassName="active" to="/repos" >Repos</Link></li>
		        </ul>
				{children}
			</div>
		)
	}
})

module.exports = APP;
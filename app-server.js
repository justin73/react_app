var express = require("express");
// create express instance here called app;
var app = express();

var connections=[];
var title = "Untitled Presentation";
//set up path from where we will handle the local file
app.use(express.static("./public"));

// load bootstrap styling
app.use(express.static("./node_modules/bootstrap/dist"))

// tell the server which port to use
var server = app.listen(3000);

//incorporate socket io with server
var io = require("socket.io").listen(server)

io.sockets.on('connection', function(socket){

	socket.once('disconnect', function(){
		// remove the socket which is disconnected
		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		console.log("Disconnected: %s sockets reaminning", connections.length);
	});

	// Pass data from server to client end, with a custom function in socket called welcome
	// what is in the {} will be the params named serverState on the client side
	socket.emit('welcome', {
		title:title
	});

	console.log("Connected: %s sockets conncted", connections.length)
	connections.push(socket);
})

console.log("Polling server");

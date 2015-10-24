/*
 * Serve content over a socket
 */

var api = require("../api/servo");  
var rf = require("../api/rf");  


var _runningInterval = 3000; // 1000 ms = 1 second

var stopServo = function(socket){
    api.stopServo();
	//sendStatus(socket, {'status': 'Stopped','isRunning': false});
};

var startServo = function(socket){
    api.startServo();
	//sendStatus(socket, {'status': 'Running','isRunning': true});
};

var sendStatus = function(socket, status){
	  socket.emit('server_status', status); 
};

module.exports = function (socket) {
  // this scope is opened on connection
  console.log("Socket connected.");
		
  socket.on('client_send:start', function(){
	console.log("Start received.");
	startServo(socket);
	//Run for a period then stop
	setTimeout( function() {
		stopServo(socket);
	}, _runningInterval ); 
 });

  socket.on('client_send:stop', function(){
	 console.log("Stop received.");
	 stopServo();
 });
  
  socket.on('client_send:signal', function(){
	 //console.log("Signal received.");
	 rf.sendSignal();
 });
};

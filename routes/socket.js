/*
 * Serve content over a socket
 */

var _runningInterval = 3000; // 1000 ms = 1 second
var _localSocket;

var stopServo = function(){
	sendStatus({'status': 'Stopped','isRunning': false});
};

var startServo = function(){
	sendStatus({'status': 'Running','isRunning': true});
};

var sendStatus = function(status){
	  _localSocket.emit('server_status', status); 
};

module.exports = function (socket) {
  // this scope is opened on connection
  console.log("Socket connected.");
	
 _localSocket = socket;	
	
 _localSocket.on('client_send:start', function(){
	console.log("Start received.");
	startServo();
	//Run for a period then stop
	setTimeout( function() {
		stopServo();
	}, _runningInterval ); 
 });

 _localSocket.on('client_send:stop', function(){
	 console.log("Stop received.");
	 stopServo();
 });
};

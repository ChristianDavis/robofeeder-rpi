'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function (socket) {
    var vm = this;
    vm.status = '';
	vm.toggle = false;
	
	socket.on('connect', function (data) {
	    console.log("Connected to server.");
	});
	
	socket.on('disconnect', function (data) {
	    console.log("Lose connection to server.");
	});
	
	socket.on('server_status', function (data) {
		console.log("Received status: " + data.status);
		vm.status = data.status;
		vm.toggle = data.isRunning;
	});

    vm.startServo = function(){
      console.log("Start clicked");
      socket.emit('client_send:start', function () {
		  // not sending any data
	  });
    }
 
    vm.stopServo = function(){
	  console.log("Stop clicked");
      socket.emit('client_send:stop', function () {
		  // not sending any data
	  });
    }
    
	vm.buttonToggle = function(){
		return vm.toggle;
	}
	
  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here
  });

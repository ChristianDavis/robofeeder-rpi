'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, socket) {
    socket.on('send:name', function (data) {
      $scope.name = data.name;
    });
  }).
  controller('MyCtrl1', function ($scope, socket) {
    var vm = this;
    vm.status = '';
    
    vm.startServo = function(){
      socket.on('send:start', function (data) {
        vm.status = data.status;
      });
    }
 
    vm.Stop = function(){
      socket.on('send:stop', function (data) {
        vm.status = data.status;
      });
    }
    
  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here
  });

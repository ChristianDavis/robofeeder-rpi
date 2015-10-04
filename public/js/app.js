'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [

  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',

  // 3rd party dependencies
  'btford.socket-io'
]);

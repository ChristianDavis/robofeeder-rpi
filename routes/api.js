/*
 * Serve JSON to our AngularJS client
 */

var gpio = require("pi-gpio");

exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};
    
exports.gpio = function (req, res) {
  var command = req.params.command;
  var response = 'none';

  if (command === "start"){
    // start modulated signal
    response = "started";

    gpio.open(16, "output", function(err) {     // Open pin 16 for output 
      gpio.write(16, 1, function() {          // Set pin 16 high (1) 
        gpio.close(16);                     // Close pin 16 
      });
    });
  }else if (command === "stop"){
      response = "stopped";
  }else if(command === "signal"){
      response = "sigged";
  }
    
  res.json({
  	'Received': response
  });
};

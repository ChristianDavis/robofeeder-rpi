/*
 * Serve JSON to our AngularJS client
 */

//var gpio = require("pi-gpio");
var piblaster = require("pi-blaster.js");  

exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};
    
exports.gpio = function (req, res) {
  var command = req.params.command;
  var response = 'none';
  var pin = 4;
  var pin2 = 18;

  if (command === "start"){
    // start modulated signal
    response = "started";
    piblaster.setPwm(pin, 0.06);
    piblaster.setPwm(pin2, 0.06);  


    
/*
    gpio.open(16, "output", function(err) {     // Open pin 16 for output 
      gpio.write(16, 1, function() {          // Set pin 16 high (1) 
        gpio.close(16);                     // Close pin 16 
      });
    });
  */
  }else if (command === "stop"){
      response = "stopped";
      piblaster.setPwm(pin, 0);  
      piblaster.setPwm(pin2, 0);  


  }else if(command === "signal"){
      response = "sigged";
    var python = require('child_process').spawn(
     'python',
     // second argument is array of parameters, e.g.:
     ["blink.py"]
     );
     var output = "";
     python.stdout.on('data', function(){ output += data });
     python.on('close', function(code){ 
       if (code !== 0) {  response="failed"; }
       response="success";
     });
    
  }
    
  res.json({
  	'Received': response
  });
};

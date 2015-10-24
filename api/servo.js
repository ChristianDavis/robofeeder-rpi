var piblaster = require("pi-blaster.js");  

var pin = 4;
var pin2 = 18;

var startServo = function(){
    piblaster.setPwm(pin, 0.06);
    piblaster.setPwm(pin2, 0.06);  
}

var stopServo = function(){
    piblaster.setPwm(pin, 0);  
    piblaster.setPwm(pin2, 0); 
}

module.exports.startServo = startServo;

module.exports.stopServo = stopServo;
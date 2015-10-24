var piblaster = require("pi-blaster.js");  


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

var rpi433    = require('rpi-433'),
    rfSniffer = rpi433.sniffer(21, 500), //Snif on PIN 2 with a 500ms debounce delay 
    rfSend    = rpi433.sendCode;
 
// Receive 
console.log("receiver listening")
rfSniffer.on('codes', function (code) {
  console.log('Code received: '+code);
});
 
// Send 
var sendSignal = function(){
  for (var i = 1332900; i < 1333000; i++){
     rfSend(i, 22, function(error, stdout) {   //Send 1234 
    if(!error) console.log("Sent signal, " stdout); //Should display 1234 
  })
  }
 
};
 //1333004
/*
You can also use rfSend like that :
 
rfSend(code);
rfSend(code, pin);
rfSend(code, callback);
rfSend(code, pin, callback);
*/
module.exports.sendSignal = sendSignal;

//module.exports.sniffer = stopServo;
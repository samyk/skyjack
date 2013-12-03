// Run this to make your drone take off for 5 seconds and then land itself
// again.

var UdpControl = require('../lib/control/UdpControl');

var control   = new UdpControl();
var fly       = true;
var emergency = true;

setInterval(function() {
  control.ref({fly: fly, emergency: emergency});
  control.pcmd();
  control.flush();
}, 30);

// For the first second, disable emergency if there was one
setTimeout(function() {
  emergency = false;
}, 1000);

setTimeout(function() {
  fly = false;
}, 5000);

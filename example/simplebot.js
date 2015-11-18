//**************
// With acknowledgement to the awesome work done by @makenai on SumoBot Jr
// code that started the idea of this originally
// ******/

var five = require("johnny-five");
var keypress = require('keypress');

var STOPVAL = 90;
var RSTOPVAL = 93;
var LSTOPVAL = 90;

var opts = {};
opts.port = process.argv[2] || "";

keypress(process.stdin);

var board = new five.Board(opts);

board.on("ready", function() {

    console.log("Welcome to SimpleBot!")
    console.log("Control the bot with the arrow keys, and SPACE to stop.")

    var left_wheel  = new five.Servo({ pin:  9, type: 'continuous' }).to(LSTOPVAL);
    var right_wheel = new five.Servo({ pin: 8, type: 'continuous'  }).to(RSTOPVAL);

    process.stdin.resume(); 
    process.stdin.setEncoding('utf8'); 
    process.stdin.setRawMode(true); 

    process.stdin.on('keypress', function (ch, key) {
    
    if ( !key ) return;

    if ( key.name == 'q' ) {

        console.log('Quitting');
        process.exit();

    } else if ( key.name == 'up' ) {

        console.log('Forward');
        left_wheel.cw();
        right_wheel.ccw();

    } else if ( key.name == 'down' ) {

        console.log('Backward');
        left_wheel.ccw();
        right_wheel.cw();      

    } else if ( key.name == 'left' ) {

        console.log('Left');
        left_wheel.ccw();
        right_wheel.ccw();      

    } else if ( key.name == 'right' ) {

        console.log('Right');
        left_wheel.cw();
        right_wheel.cw();

    } else if ( key.name == 'space' ) {

        console.log('Stopping');
        left_wheel.to(LSTOPVAL);
        right_wheel.to(RSTOPVAL);

    } else if (key.name == "o") {
        console.log("on");
        led.on();
    } else if (key.name == "f") {
        console.log("off");
        led.off();
    } else if (key.name == "s") {
        console.log("blink");
        led.strobe(2000);
    }
  });
});

board.on("error", function(err) {
    console.log(err.message);
    process.exit();
});

var five = require("johnny-five"),
        board = new five.Board();

var PIN  = 7;
var PiezoPIN  = 11;

board.on("ready", function() {

    //Create new Ping and show distance on change
    var ping = new five.Proximity({
        pin: PIN,
        freq: 200,
        controller: "HCSR04"
    });

    /*
    var piezo = new five.Piezo(PiezoPIN);
    var intervalID = 0;
    */

    ping.on("change", function( err, value ) {

        console.log('Object is ' + this.cm + ' cm away');
        // now we do a callback on the interval of the centimetres thus
        // shorter centimetres means less interval before calling the tone command

        // Remove the following if you dont have a piezo
        
        /*clearInterval(intervalID);
        if (this.cm > 4) {  // this is arbitrary to stop the conflicts with tone.
            intervalID = setInterval(function() {
                piezo.tone("e", "1");
            }, Math.floor(this.cm));
        }*/
    });
});  
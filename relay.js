var gpio = require('rpi-gpio');

gpio.setMode('mode_bcm');

gpio.setup(11, gpio.DIR_LOW, write);
 
function write() {
    gpio.write(11, 0, function(err) {
        if (err) throw err;
        console.log('Written to pin');
        // gpio.destroy();
    });
}

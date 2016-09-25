var Bleacon = require('bleacon');

Bleacon.on('discover', function(bleacon) {
    console.log(bleacon);
});

Bleacon.startScanning();

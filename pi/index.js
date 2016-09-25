var Bleacon = require('bleacon'),
    clientFromConnectionString = require('azure-iot-device-amqp').clientFromConnectionString,
    Message = require('azure-iot-device').Message;

var connectionString = 'HostName=NodeHub.azure-devices.net;DeviceId=mtc-pi01;SharedAccessKey=BvlNzjK6K6deG7QmS8OhMXwgzjtA5bhNMhnFPZEsJEk=';
var client = clientFromConnectionString(connectionString);

function printResultFor(op) {
    return function printResult(err, res) {
        if (err) console.log(op + ' error: ' + err.toString());
        if (res) console.log(op + ' status: ' + res.constructor.name);
    }
}

Bleacon.on('discover', function(data) {
    var message = new Message(JSON.stringify(data));
    console.log('Sending message: ' + message.getData());
    client.sendEvent(message, printResultFor('send'));
});

var connectCallback = function (err) {
    if (err) {
        console.log('Could not connect: ' + err);
    } else {
        console.log('Client connected. Starting to scan...');

        Bleacon.startScanning();
    }
};

client.open(connectCallback);

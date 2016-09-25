var iothub = require('azure-iothub');
var device = new iothub.Device(null);
device.deviceId = 'mtc-pi01';

var connectionString = 'HostName=NodeHub.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=KRoXnQ8L4EOpl46xwU1xUEU7stTk0mwHdjrTXm9L05M=';
var registry = iothub.Registry.fromConnectionString(connectionString);


var printDeviceInfo = function(err, deviceInfo, res) {
    if(deviceInfo) {
        console.log('Device id: ' + deviceInfo.deviceId);
        console.log('Device key: ' + deviceInfo.authentication.SymmetricKey.primaryKey);
    }
};

registry.create(device, function(err, deviceInfo, res) {
    if (err) {
        console.log(err);
        registry.get(device.deviceId, printDeviceInfo);
    }
    if (deviceInfo) {
        printDeviceInfo(err, deviceInfo, res);
    }
});

var net = require('net');
var HOST = 'localhost';
var PORT = 5000; 
var client = new net.Socket();
client.connect(PORT, HOST, function() {
    console.log('Client connected to: ' + HOST + ':' + PORT);
    client.write('hello connection made to server and client');
});
client.on('data', function(data) {    
    console.log('Client received: ' + data);
});
client.on('close', function() {
    console.log('Client closed');
});
 
client.on('error', function(err) {
    console.error(err);
});

var net = require('net');
var HOST = 'localhost';
var PORT = 5000;
var server = net.createServer(onClientConnected);  
server.listen(PORT, HOST, function() {  
  console.log('server listening on ', server.address());
});
function onClientConnected(sock) {  
  var remoteAddress = sock.remoteAddress + ':' + sock.remotePort;
  console.log('new client connected:', remoteAddress);
  sock.on('data', function(data) {
    console.log('%s Says: %s', remoteAddress, data);
    sock.write(data);
  });
  sock.on('close',  function () {
    console.log('connection from closed', remoteAddress);
  });
  sock.on('error', function (err) {
    console.log('Connection %s error: %s', remoteAddress, err.message);
  });
};

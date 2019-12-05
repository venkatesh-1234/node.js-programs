var net =require('net');
var PORT=8000;
var HOST='127.0.0.1';
var clients = [];
var server=net.createServer()
server.on('connection',function(socket) {
     var newaddress = socket.remoteAddress + ":" + socket.remotePort;
     clients.push(socket);
    console.log('new client is added ',newaddress);
  socket.on('data',function(data){
    broadcast(data);
  });
  function broadcast(data) {
    clients.forEach(function(client) {
      client.write(data);
    });
    process.stdout.write(newaddress+':'+data)
  }
});
server.listen(PORT,HOST);{
    console.log('server created sucessesfullty')
}

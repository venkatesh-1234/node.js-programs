var net = require('net');
var colors = require('colors');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
rl.on('line', function(line){
    socket.write(line)  
})
var HOST = '127.0.0.1';
var PORT = 8000; 
var client = new net.Socket();
var socket=client.connect(PORT, HOST, function() {
    console.log('connected to: ' + HOST + ':' + PORT);
});
client.on('data', function(data) {    
console.log(colors.green(data.toString()));
});
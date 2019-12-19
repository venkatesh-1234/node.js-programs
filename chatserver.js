var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('./mysql.js');
app.get('/', function(req, res) {
   res.sendfile('index.html');
});
users = [];
io.on('connection', function(socket) {
   console.log('user is connected');
   socket.on('setUsername', function(data) {
      socket.username = data;
      if(users.indexOf(data) > -1) {
         socket.emit('userExists', data + ' username is taken! Try some other username.');
      } else {
         users.push(data);
         socket.emit('userSet', {username: data});
      }
   }); 
   socket.on('disconnect',function(condata){
      io.sockets.emit('disconnect',socket.username);
       console.log(socket.username,'  is  disconnected')
   })
   socket.on('msg', function(data) {
      io.sockets.emit('newmsg', data);
      console.log(data)
    mysql.send(data);
   })
   socket.on("conmsg",function(condata){
      io.sockets.emit("conmsg",condata);
   })
});
http.listen(8080, function() {
   console.log('listening on localhost:8080');
});

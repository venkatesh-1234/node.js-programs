var net= require('net');
var s=[];
var server=net.createServer(function(socket){
    console.log("new client is connected")
    s.push(socket);
    socket.setEncoding('utf8');
    socket.on('data',function(data){
        var a =data.toString().substr(0,1);
        if(a == '@'){
            var l= data.length;
                var msg=data.substr(1,l);
                for(var i=0;i<s.length;i++){
                    s[i].write(msg);
                }
                console.log(i+':'+msg);
            }
    else{
        var a=data.split('-');
        l=a.length;
        for(var i=0;i<l-1;i++){
            s[a[i]].write(a[l-1]);
        }
        console.log(i+':'+a[l-1]+'\n')
    }
    });
});
server.listen(8080);{
    console.log('server created sucesesfully');
}

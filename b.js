var chandu = require("./a.js");
var hi = require("./c.js");
var venky =chandu.sum(10,20,30,function(c,d){console.log(c+d);})
var ok = chandu.diff(100,80);
var bye = hi.multiply(20,20,function(x,y){console.log(x*y);});
console.log("Value: "+venky);
console.log("value: "+ok);
console.log("value: "+bye);


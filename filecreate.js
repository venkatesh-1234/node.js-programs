var fs = require('fs') 
var data = "chandu venkatesh" 
fs.writeFile('Out.js', data, (err) => { 
    if (err) throw err; 
else{console.log("sucussesfully created");}})
 

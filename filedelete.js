var fs = require('fs')  
fs.unlink('Out.js', (err) => { 
    if (err) throw err; 
else{console.log("sucussesfully deleted");}})
 

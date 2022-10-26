const fs = require('fs');

fs.appendFile('FbW10.txt','Add new messagge!', function(err,data){
    if (err) throw err;

    console.log('Add is completed successfully!')
})
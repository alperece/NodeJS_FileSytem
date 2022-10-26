const fs = require('fs');

fs.readdir('AlperEce', function(err, files){
    if (err) throw err;

    for ( var file of files){
        console.log(file)
    }
});
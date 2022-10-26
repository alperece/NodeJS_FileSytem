// Delete Files: Use fs.unlink() method to delete an existing file!

const fs = require('fs');

fs.unlink('test.txt', function(err){
    if (err) throw err;
    console.log('The file was deleted successfully!');
});


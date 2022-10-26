// Rename Folder:
// Before - Alper
// After - AlperEce

const fs = require('fs');

fs.rename('Alper','AlperEce',function(err){
    if (err) throw err;
});
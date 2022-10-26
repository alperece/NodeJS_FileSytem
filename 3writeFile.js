// Writing file:
// If the file already exists then it overwrites the existing content!
// Otherwise, it will create a new file and write data into it!

const fs = require('fs');

fs.writeFile('test2.txt','This is my new message!', function(err, data){
    if (err) throw err;

    console.log('Data was successfully written!');
});

/* 
BEFORE - FbW10.txt : 

Hello FbW10!

We are learning Node JS!
Add new sentence here!

Add new sentence here!
*/
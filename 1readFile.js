// FILE SYSTEM (FS):--------------------------------------

// Node JS includes fs module to access physical file system!

// 1- Reading File: 

const fs = require('fs'); // fs is one of the core module and we are requiring it from Node

fs.readFile('FbW10.txt','utf-8',function(err,data){
    if (err) throw err;

    console.log(data);
});

// utf-8 : The unicode character sets. Type of file format

/*  In the readFile method, we are using 3 paramaters:
    1- fileName : Full path and name of the file as a string!
    2- options: This is optional part and you can define file type as a string or you can write some objetcs
    3- callBack function : A function with two parameters like "err" and "data"
 */

const message2 = require('./myscript.js');
console.log(message2);

const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
    if(err) { //checks for error
        //throw new Error(err); Possible Solution
        console.log(err);
        //return; Possible Solution
    }
    console.log(filenames);
});
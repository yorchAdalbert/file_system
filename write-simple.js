'use strict';

const fs = require('fs');
const text = process.argv[2];

fs.writeFile('target.txt', text, err => {
    if (err)
        throw err;
    
    console.log('File saved!');
})
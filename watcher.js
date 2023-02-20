'use restrict';

const fs = require('fs');
fs.watch('target.txt', () => console.log('The file has changed!'));

console.log('Now Watching for changes...');
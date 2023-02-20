const fs = require('fs');
const filename = process.argv[2];
const data = fs.readFileSync(filename);
process.stdout.write(data.toString());
const fs = require('fs');

const data = fs.readFileSync(__filename);

console.log('File data is', data);

console.log('TEST');
//the TEST is printed after the data because it is sync operation and in sync operation code is executed line by line
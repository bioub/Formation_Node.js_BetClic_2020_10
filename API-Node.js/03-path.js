// function (exports, require, module, __dirname, __filename)

const fs = require('fs');
const path = require('path');

const absPath = path.resolve(__dirname, '..', 'Module', '01-fs.js');
console.log(absPath);

const relPath = path.join(__dirname, '..', 'Module', '01-fs.js');
console.log(relPath);

console.log(path.extname(absPath));
console.log(path.parse(absPath));

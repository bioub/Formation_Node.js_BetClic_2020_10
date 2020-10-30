// function (exports, require, module, __dirname, __filename)

const path = require('path');

console.log(process.cwd())

process.chdir(__dirname)

// process.exit(1);

const absPath = path.resolve('..', 'Module', '01-fs.js');
console.log(absPath);

const relPath = path.join('..', 'Module', '01-fs.js');
console.log(relPath);

console.log(path.extname(absPath));
console.log(path.parse(absPath));
